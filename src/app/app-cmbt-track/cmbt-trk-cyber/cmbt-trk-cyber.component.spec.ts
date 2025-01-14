import { DiceService } from './../../shared/services/dice/dice.service';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './../../shared/services/data.service';
import { CommonUiModule } from './../../shared/modules/common-ui/common-ui.module';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmbtTrkCyberComponent } from './cmbt-trk-cyber.component';

describe('CmbtTrkCyberComponent', () => {
  let component: CmbtTrkCyberComponent;
  let fixture: ComponentFixture<CmbtTrkCyberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonUiModule,
        HttpClientModule,
        PipesModule
      ],
      declarations: [
        CmbtTrkCyberComponent
      ],
      providers: [
        DataService,
        DiceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmbtTrkCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
