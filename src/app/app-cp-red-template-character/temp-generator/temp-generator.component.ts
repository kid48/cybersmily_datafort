import { SeoService } from './../../shared/services/seo/seo.service';
import { NameGeneratorService } from '../../shared/services/namegen/name-generator.service';
import { DiceService } from './../../shared/services/dice/dice.service';
import { CpRedTemplateGeneratorService } from '../../shared/cpred/services/cpredpc/cp-red-template-generator.service';
import { CpRedBaseCharacter } from '../../shared/cpred/models/cp-red-base-character';
import { Component, OnInit } from '@angular/core';
import { RedJumpkitLifepathService } from '../../shared/cpred/services/cprlifepath/red-jumpkit-lifepath.service';

@Component({
  selector: 'cs-temp-generator',
  templateUrl: './temp-generator.component.html',
  styleUrls: ['./temp-generator.component.css']
})
export class TempGeneratorComponent implements OnInit {

  character: CpRedBaseCharacter;
  roles: string[];

  constructor( private templateGenerator: CpRedTemplateGeneratorService,
    private dice: DiceService,
    private lifepathService: RedJumpkitLifepathService,
    private nameService: NameGeneratorService,
    private seo: SeoService
      ) {
  }

  ngOnInit() {
    this.seo.updateMeta(
      'Cyberpunk Red Jumpstart Kit Charcter generator',
      '2020-07, Cybersmily\'s Datafort Cyberpunk  Red Jumpstart Kit Charcter generator is an application to generate characters based on the Cyberpunk Red character templates.'
    );
    this.character = new CpRedBaseCharacter();
    this.roles = new Array<string>();
    this.roles.push('Fixer');
    this.roles.push('Netrunner');
    this.roles.push('Solo');
    this.roles.push('Nomad');
    this.roles.push('Tech');
    this.roles.push('Rockerboy');
  }
  generate() {
    const roll = this.dice.generateNumber(0, (this.roles.length - 1));
    const role = this.roles[roll];
    this.templateGenerator.generateCharacter(role).subscribe(data => {
      this.character = data;
      this.lifepathService.generateLifePath().subscribe( (lifepath) => {
        this.character.lifepath = lifepath;
          this.nameService.generateName().subscribe( name => {
            this.character.name = name;
          });
      });
    });
  }

}
