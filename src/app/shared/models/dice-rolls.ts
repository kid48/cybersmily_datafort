export class DiceRolls {
    total: number;
    rolls: any[];

    constructor() {
      this.total = 0;
      this.rolls = new Array();
    }

    /**
     * Adds two DiceRolls objects together.
     *
     * @param {DiceRolls} d - DiceRolls object to add to current
     * @memberof DiceRolls
     */
    add ( d: DiceRolls ) {
      if (typeof(d.total) !== 'undefined' && typeof(d.rolls) !== 'undefined') {
        this.total += d.total;
        Array.prototype.push.apply(this.rolls, d.rolls);
      }
    }

    /**
     * Substracts a DiceRolls from the this dice roll.
     *
     * @param {DiceRolls} d - DiceRolls to subtract
     * @memberof DiceRolls
     */
    subtract(d: DiceRolls) {
      if (typeof (d.total) !== 'undefined' && typeof (d.rolls) !== 'undefined') {
        this.total -= d.total;
        Array.prototype.push.apply(this.rolls, d.rolls);
      }
    }

    /**
     * Multiplies this DiceRolls by the passed in DiceRolls.
     *
     * @param {DiceRolls} d - DiceRolls to multiply by
     * @memberof DiceRolls
     */
    multiply(d: DiceRolls) {
      if (typeof (d.total) !== 'undefined' && typeof (d.rolls) !== 'undefined') {
        this.total *= d.total;
        Array.prototype.push.apply(this.rolls, d.rolls);
      }
    }

    /**
     * Shows the total and the dice rolls that were done.
     *
     * @returns {string} - Total: # (dice rolls)
     * @memberof DiceRolls
     */
    show(): string {
      return `Total: ${this.total} (${this.rolls.join(', ')})`;
    }
}
