import { Cp2020PlayerSkill } from './cp2020-player-skill';
export class Cp2020PlayerSkills {
  RoleTotal: number;
  OtherTotal: number;
  skills: Array<Cp2020PlayerSkill>;
  rep: number;
  ip: number;

  constructor() {
    this.skills = new Array<Cp2020PlayerSkill>();
    this.initiateSkills();
    this.RoleTotal = 0;
    this.OtherTotal = 0;
    this.rep = 0;
    this.ip = 0;
  }

  private initiateSkills() {
    // ATTR
    this.skills.push(new Cp2020PlayerSkill({name: 'Внешний Вид', ipmod: 1, stat: 'ATTR'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Гардероб и стиль', ipmod: 1, stat: 'ATTR'}));
    // BODY
    this.skills.push(new Cp2020PlayerSkill({name: 'Выносливость', ipmod: 1, stat: 'BODY'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Проявление Силы', ipmod: 1, stat: 'BODY'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Плавание', ipmod: 1, stat: 'BODY'}));
    // COOL
    this.skills.push(new Cp2020PlayerSkill({name: 'Допрос', ipmod: 1, stat: 'COOL'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Угрожать', ipmod: 1, stat: 'COOL'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Красноречие', ipmod: 1, stat: 'COOL'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Устойчивочть к пыткам и наркотикам', ipmod: 1, stat: 'COOL'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Знание Улиц', ipmod: 1, stat: 'COOL'}));
    // EMP
    this.skills.push(new Cp2020PlayerSkill({name: 'Понимание Людей', ipmod: 1, stat: 'EMP'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Интервью', ipmod: 1, stat: 'EMP'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Лидерство', ipmod: 1, stat: 'EMP'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Убеждать и Заговаривать Зубы', ipmod: 1, stat: 'EMP'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Выступать', ipmod: 1, stat: 'EMP'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Соблазнение', ipmod: 1, stat: 'EMP'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Social', ipmod: 1, stat: 'EMP'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Trance', ipmod: 1, stat: 'EMP'}));
    // INT
    this.skills.push(new Cp2020PlayerSkill({name: 'Бухгалтерия', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Антропология', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Замечать/узнавать', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Биология', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Ботаника', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Бюрократия', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Business Sense', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Химия', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Композиция', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Корпоративная политика', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Диагностика', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Образование и Общие Знания', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Експерт', option: '', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Експерт', option: '', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Азартные Игры', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Геология', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Прятаться/Избегать', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'История', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Знание Языка', option: '', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Знание Языка', option: '', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Знание Языка', option: '', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Использование Библиотек', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Математика', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Физика', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Програмирование', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Следить/Шпионить', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Выживание в Космосе', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Игра на Бирже', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Знание Сети', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Преподовать', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Выживание в воде', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Выживание в пустине ', ipmod: 1, stat: 'INT'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Зоология', ipmod: 1, stat: 'INT'}));
    // REF
    this.skills.push(new Cp2020PlayerSkill({name: 'Лук/Арбалет', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Атлетика', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Борьба', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Танцевать', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Уворачиваться', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Вождение', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Фехтование', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Пистолет', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Тяжелое оружые', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Боевое искуство', option: '', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Боевое искуство', option: '', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Боевое искуство', option: '', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Ближний бой', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Управление Мотоциклом', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Управление Большег Трансп', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Пилот: Вертолет', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Пилот: Самолет', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Пилот: Дирижабль', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Пилот: VTV', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Пилот', option: '', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Пилот', option: '', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Ружье', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Скрытность', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Пистолет-пулемет', ipmod: 1, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Бой под водой', ipmod: 2, stat: 'REF'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Бой в невесомости', ipmod: 2, stat: 'REF'}));
    // TECHnew
    this.skills.push(new Cp2020PlayerSkill({name: 'Технология Самолетов', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'AV Технология', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Базовая технол', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Упр Криокамер', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Упр Кибердек', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Кибертех', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Разборка', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Маскировка', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Электроника', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Элект безоп', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Перв помощь', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Подделывание', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Gyro Tech', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Рисование', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Кино- фотосьемка', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Фармацевтика', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Вскрытие замков', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Кража', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Игра на инструменте', ipmod: 1, stat: 'TECH'}));
    this.skills.push(new Cp2020PlayerSkill({name: 'Оруж технолог', ipmod: 1, stat: 'TECH'}));
    // Other
    for ( let i = 0; i < 7; i++) {
      this.skills.push(new Cp2020PlayerSkill({name: 'Other', option: '', ipmod: 1, stat: ''}));
    }

  }

  get ATTR(): Array<Cp2020PlayerSkill> {
    return this.skills.filter( sk => sk.stat.toLowerCase() === 'attr');
  }

  get BODY(): Array<Cp2020PlayerSkill> {
    return this.skills.filter( sk => sk.stat.toLowerCase() === 'body');
  }

  get COOL(): Array<Cp2020PlayerSkill> {
    return this.skills.filter((sk) => sk.stat.toLowerCase() === 'cool');
  }

  get EMP(): Array<Cp2020PlayerSkill> {
    return this.skills.filter((sk) => sk.stat.toLowerCase() === 'emp');
  }

  get INT(): Array<Cp2020PlayerSkill> {
    return this.skills.filter((sk) => sk.stat.toLowerCase() === 'int');
  }

  get REF(): Array<Cp2020PlayerSkill> {
    return this.skills.filter( sk => sk.stat.toLowerCase() === 'ref');
  }

  get TECH(): Array<Cp2020PlayerSkill> {
    return this.skills.filter((sk) => sk.stat.toLowerCase() === 'tech');
  }

  get Other(): Array<Cp2020PlayerSkill> {
    return this.skills.filter((sk) => sk.name.toLowerCase() === 'other');
  }

  get RoleSKills(): Array<Cp2020PlayerSkill> {
    return this.skills.filter( sk => sk.isRoleSkill && !sk.chipped);
  }

  get RoleSKillTotal(): number {
    return this.RoleSKills.reduce( (a, b) => a + b.value, 0);
  }

  get ChippedSkills(): Array<Cp2020PlayerSkill> {
    return this.skills.filter( sk => sk.chipped);
  }

  get NonRoleSkills(): Array<Cp2020PlayerSkill> {
    return this.skills.filter( sk => !sk.chipped && !sk.isRoleSkill);
  }

  get NonRoleSKillTotal(): number {
    return this.NonRoleSkills.reduce( (a, b) => a + b.value, 0);
  }

  getSkillForWeaponType(type: string): Array<Cp2020PlayerSkill> {
    if (!type) {
      return [];
    }
    let list = new Array<Cp2020PlayerSkill>();
    switch (type.toLowerCase()) {
      case 'p':
        list = this.REF.filter((s) => s.name.toLowerCase().startsWith('handgun'));
        break;
      case 'smg':
        list = this.REF.filter((s) => s.name.toLowerCase().startsWith('submachinegun'));
        break;
      case 'rif':
      case 'sht':
        list = this.REF.filter((s) => s.name.toLowerCase().startsWith('rifle'));
        break;
      case 'mel':
        list = this.getPhysicalCombatSkills();
        list.unshift(
          new Cp2020PlayerSkill({ name: 'Not trained', stat: 'ref', value: 0 })
        );
        break;
      case 'hvy':
        list = this.REF.filter((s) => s.name.toLowerCase().startsWith('heavy weapons'));
        break;
      default:
        list = this.getCombatSkills();
    }
    if (list.length < 1) {
      return [new Cp2020PlayerSkill({ name: 'Not trained', stat: 'ref', value: 0 })];
    }
    return list;
  }

  getPhysicalCombatSkills(): Array<Cp2020PlayerSkill> {
    return this.REF.filter(
      (s) =>
        s.name.toLowerCase() === 'melee' ||
        s.name.toLowerCase() === 'brawling' ||
        s.name.toLowerCase().toLowerCase().startsWith('martial') ||
        s.name.toLowerCase() === 'fencing'
    );

  }

  getCombatSkills(): Array<Cp2020PlayerSkill> {
    return this.REF.filter(
      (s) =>
        s.name.toLowerCase() === 'melee' ||
        s.name.toLowerCase() === 'brawling' ||
        s.name.toLowerCase().startsWith('martial')  ||
        s.name.toLowerCase() === 'fencing' ||
        s.name.toLowerCase() === 'rifle' ||
        s.name.toLowerCase() === 'pistol' ||
        s.name.toLowerCase() === 'submachinegun' ||
        s.name.toLowerCase() === 'archery' ||
        s.name.toLowerCase() === 'heavy weapons'
    );
  }

  setRoleSkills(roleSkills: any[]) {
    // set the isRoleSkill flag
    let skills = this.processRoleSkillArray(this.COOL, roleSkills);
    skills = this.processRoleSkillArray(this.EMP, skills);
    skills = this.processRoleSkillArray(this.TECH, skills);
    skills = this.processRoleSkillArray(this.BODY, skills);
    skills = this.processRoleSkillArray(this.ATTR, skills);
    skills = this.processRoleSkillArray(this.INT, skills);
    skills = this.processRoleSkillArray(this.REF, skills);
    this.addToOthers(skills);
  }

  setSecondarySkills(secondarySkills: any[]) {
    // set the isRoleSkill flag
    let skills = this.processRoleSkillArray(this.COOL, secondarySkills, true);
    skills = this.processRoleSkillArray(this.EMP, skills, true);
    skills = this.processRoleSkillArray(this.TECH, skills, true);
    skills = this.processRoleSkillArray(this.BODY, skills, true);
    skills = this.processRoleSkillArray(this.ATTR, skills, true);
    skills = this.processRoleSkillArray(this.INT, skills, true);
    skills = this.processRoleSkillArray(this.REF, skills, true);
    this.addToOthers(skills);

  }

  private processRoleSkillArray(skillArray: Array<Cp2020PlayerSkill>, roleSkills: any[], isSecondary?: boolean) {
    // clean the flags
    if (!isSecondary) {
      skillArray.map( skill => { skill.isRoleSkill = false; skill.roleChoice = false; });
    }
    // find if a role skill
    const rSkills = roleSkills.slice();
    let index = rSkills.length - 1;
    while (index >= 0) {
      if ( Array.isArray(rSkills[index])) {
        let j = rSkills[index].length - 1;
        while (j >= 0 ) {
          const found = skillArray.findIndex( s => s.name.toLowerCase() === rSkills[index][j].toLowerCase());
          if (found > -1) {
            skillArray[found].isRoleSkill = true;
            skillArray[found].roleChoice = true;
            skillArray[found].isSecondarySkill = isSecondary;
            rSkills[index].splice(j, 1);
          }
          j--;
        }
      } else {
        const found = skillArray.findIndex( s => s.name.toLowerCase() === rSkills[index].toLowerCase());
        if (found > -1) {
          skillArray[found].isRoleSkill = true;
          skillArray[found].isSecondarySkill = isSecondary;
          rSkills.splice(index, 1);
        }
      }
      index--;
    }
    return rSkills;
  }

  addToOthers(roleSkills: any[]) {
    // reset all the skills.
    this.Other.map( skill => { skill.isRoleSkill = false; skill.roleChoice = false; });
    let index = roleSkills.length - 1;
    // loop through the role array of skills.
    while (index >= 0) {
      // check if the role skill is an array of choices
      if ( Array.isArray(roleSkills[index])) {
        // loop through choices
        roleSkills[index].forEach( (sk, j) => {
          if (sk.indexOf('Expert') > -1 ) {
            this.addExpert( sk);
          } else {
            const found = this.Other.findIndex( skill => skill.option.toLowerCase() === sk.toLowerCase());
            if (found < 0) {
              const i = this.Other.findIndex( skill => skill.option === '');
              this.Other[i].option = sk;
              this.Other[i].isRoleSkill = true;
              this.Other[i].roleChoice = true;
            }
          }
        });
      } else {
        if (roleSkills[index].indexOf('Expert') > -1 ) {
          this.addExpert( roleSkills[index]);
        } else {
          const found = this.Other.findIndex( sk => sk.option.toLowerCase() === roleSkills[index].toLowerCase());
          if (found < 0) {
            const i = this.Other.findIndex( sk => sk.option === '');
            this.Other[i].option = roleSkills[index];
            this.Other[i].isRoleSkill = true;
          }
        }
      }
      index--;
    }
  }

  addExpert( skillName: string) {
    const index = this.INT.findIndex(sk => sk.name.toLowerCase() === 'expert');
    this.INT[index].option = skillName.replace('Expert: ', '');
    this.INT[index].isRoleSkill = true;
  }

  calculateTotals() {
    this.RoleTotal = this.RoleSKillTotal;
    this.OtherTotal = this.NonRoleSKillTotal;
  }
}
