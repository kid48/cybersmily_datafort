import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrTraceviewComponent } from './nr-traceview.component';
import { NrTrackerService } from '../services';
import { DiceService } from './../../shared/services/dice/dice.service';

describe('NrTraceviewComponent', () => {
  let component: NrTraceviewComponent;
  let fixture: ComponentFixture<NrTraceviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NrTraceviewComponent
      ],
      imports: [
        ModalModule.forRoot()
      ],
      providers: [
        BsModalService,
        BsModalRef,
        NrTrackerService,
        DiceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrTraceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});