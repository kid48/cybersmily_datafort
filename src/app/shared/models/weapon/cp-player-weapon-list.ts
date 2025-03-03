import { DiceService } from './../../services/dice/dice.service';
import { DataWeapon } from './data-weapon';
import { CpPlayerWeapon } from './cp-player-weapon';
export class CpPlayerWeaponList {
  items: Array<CpPlayerWeapon>;

  constructor(length?: number) {
    if (length) {
      this.items = Array.from(
        { length: length },
        () => new CpPlayerWeapon()
      );
    } else {
      this.items = new Array<CpPlayerWeapon>();
    }
  }

  get totalCost(): number {
    return this.items.reduce((a, b) => (a += b.cost), 0);
  }

  deleteWeapon(index: number) {
    if (!isNaN(Number(index)) && index > -1) {
      this.items.splice(index, 1);
    }
  }

  addWeapon(weapon: CpPlayerWeapon) {
    this.items.push(weapon);
  }

  addDataWeapon(weapon: DataWeapon) {
    this.items.push(new CpPlayerWeapon(weapon));
  }

  addPlayerWeaponList(weapons: Array<CpPlayerWeapon>) {
    weapons.forEach((wpn) => this.addWeapon(wpn));
  }

  addDataWeaponList(weapons: Array<DataWeapon>) {
    if (weapons && weapons.length > 0) {
      weapons.forEach((wpn) => {
        this.addDataWeapon(wpn);
      });
    }
  }

  updateWeapon(index: number, weapon: CpPlayerWeapon) {
    if (!isNaN(Number(index)) && index > -1 && weapon) {
      this.items[index] = weapon;
    }
  }
  generateWeapon(weaponList: Array<DataWeapon>, diceService: DiceService, count: number = 1) {
    if (count < 1 || count > weaponList.length - 1) {
      return;
    }
    for (let i = 0; i < count; i++) {
      let wpn: DataWeapon;
      let tries = 0;
      do {
        const roll = diceService.generateNumber(
          0,
          weaponList.length - 1
        );
        wpn = weaponList[roll];
        tries++;
      } while (this.items.some((w) => w.name === wpn.name) || tries < 10);
      this.addDataWeapon(wpn);
    }
  }
}
