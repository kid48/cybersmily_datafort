import { CommonUiModule } from './../../shared/modules/common-ui/common-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './../../shared/services/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifepathEventsComponent } from './lifepath-events.component';
import { DiceService } from './../../shared/services/dice/dice.service';

describe('LifepathEventsComponent', () => {
  let component: LifepathEventsComponent;
  let fixture: ComponentFixture<LifepathEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifepathEventsComponent ],
      imports: [CommonUiModule, HttpClientModule],
      providers: [DiceService, DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifepathEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
