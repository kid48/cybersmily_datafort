import { CommonUiModule } from './../../shared/modules/common-ui/common-ui.module';
import { DiceService } from './../../shared/services/dice/dice.service';
import { PopoverModule, TooltipModule } from 'ngx-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrMapGridComponent } from './nr-map-grid.component';
import { NgxUiLoaderService, NgxUiLoaderModule } from 'ngx-ui-loader';
import { NrMapCellComponent } from '../nr-map-cell/nr-map-cell.component';
import { NrDatafortComponent } from '../nr-datafort/nr-datafort.component';
import { DataService } from './../../shared/services/data.service';
import { NrTrackerService } from '../services';

describe('NrMapGridComponent', () => {
  let component: NrMapGridComponent;
  let fixture: ComponentFixture<NrMapGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NrMapGridComponent,
        NrMapCellComponent,
        NrDatafortComponent
      ],
      imports: [
        HttpClientTestingModule,
        NgxUiLoaderModule,
        CommonUiModule
      ],
      providers: [
        NgxUiLoaderService,
        DataService,
        NrTrackerService,
        DiceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrMapGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
