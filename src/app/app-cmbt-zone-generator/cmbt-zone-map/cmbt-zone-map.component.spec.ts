import { CmbtZoneBlockService } from './../../shared/services/cmbt-zone/cmbt-zone-block.service';
import { CmbtZoneStreetObjectService } from './../../shared/services/cmbt-zone/cmbt-zone-street-object.service';
import { CmbtZoneBuildingService } from './../../shared/services/cmbt-zone/cmbt-zone-building.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DiceService } from './../../shared/services/dice/dice.service';
import { DataService } from './../../shared/services/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmbtZoneMapComponent } from './cmbt-zone-map.component';

describe('CmbtZoneMapComponent', () => {
  let component: CmbtZoneMapComponent;
  let fixture: ComponentFixture<CmbtZoneMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmbtZoneMapComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataService,
        DiceService,
        CmbtZoneBuildingService,
        CmbtZoneStreetObjectService,
        CmbtZoneBlockService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmbtZoneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
