import { CmbtTrckOppChartService } from './services/cmbt-trck-opp-chart.service';
import { CommonUiModule } from './../shared/modules/common-ui/common-ui.module';
import { PipesModule } from './../shared/pipes/pipes.module';
import { Cp2020RolesDataService } from './../shared/services/chargen/cp2020-roles-data.service';
import { CombatTrackerService } from './services/combat-tracker.service';
import { SkillListService } from './../shared/services/data/skill-list.service';
import { OpponentTrackerService } from './services/opponent-tracker.service';
import { DiceService } from './../shared/services/dice/dice.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCmbtTrackRoutingModule } from './app-cmbt-track-routing.module';
import { CmbtTrckFormComponent } from './cmbt-trck-form/cmbt-trck-form.component';
import { CmbtTrckOpponentCardComponent } from './cmbt-trck-opponent-card/cmbt-trck-opponent-card.component';
import { CmbtTrckModSelectorComponent } from './cmbt-trck-mod-selector/cmbt-trck-mod-selector.component';
import { CmbtTrckStatsComponent } from './cmbt-trck-stats/cmbt-trck-stats.component';
import { CmbtTrckStatComponent } from './cmbt-trck-stat/cmbt-trck-stat.component';
import { CmbtTrkWpnComponent } from './cmbt-trk-wpn/cmbt-trk-wpn.component';
import { CmbtTrkSpComponent } from './cmbt-trk-sp/cmbt-trk-sp.component';
import { CmbtTrkWpnsComponent } from './cmbt-trk-wpns/cmbt-trk-wpns.component';
import { CmbtTrkSkillsComponent } from './cmbt-trk-skills/cmbt-trk-skills.component';
import { CmbtTrkCyberComponent } from './cmbt-trk-cyber/cmbt-trk-cyber.component';
import { CmbtTrckWoundLevelComponent } from './cmbt-trck-wound-level/cmbt-trck-wound-level.component';
import { CmbtTrckWoundSectComponent } from './cmbt-trck-wound-sect/cmbt-trck-wound-sect.component';
import { CmbtTrckMainComponent } from './cmbt-trck-main/cmbt-trck-main.component';
import { CmbtTrckInstructionsComponent } from './cmbt-trck-instructions/cmbt-trck-instructions.component';
import { CmbtTrckGearComponent } from './cmbt-trck-gear/cmbt-trck-gear.component';
import { CmbtTrckModWpnComponent } from './cmbt-trck-mod-wpn/cmbt-trck-mod-wpn.component';

@NgModule({
  declarations: [
    CmbtTrckFormComponent,
    CmbtTrckOpponentCardComponent,
    CmbtTrckModSelectorComponent,
    CmbtTrckStatsComponent,
    CmbtTrckWoundSectComponent,
    CmbtTrckWoundLevelComponent,
    CmbtTrckStatComponent,
    CmbtTrkWpnComponent,
    CmbtTrkSpComponent,
    CmbtTrkWpnsComponent,
    CmbtTrkSkillsComponent,
    CmbtTrkCyberComponent,
    CmbtTrckMainComponent,
    CmbtTrckInstructionsComponent,
    CmbtTrckGearComponent,
    CmbtTrckModWpnComponent
  ],
  imports: [
    CommonUiModule,
    CommonModule,
    PipesModule,
    AppCmbtTrackRoutingModule
  ],
  providers: [
    DiceService,
    OpponentTrackerService,
    CmbtTrckOppChartService,
    CombatTrackerService,
    SkillListService,
    Cp2020RolesDataService
  ]
})
export class AppCmbtTrackModule { }