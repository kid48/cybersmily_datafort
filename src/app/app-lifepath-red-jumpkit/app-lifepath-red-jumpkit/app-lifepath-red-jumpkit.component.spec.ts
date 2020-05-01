import { HttpClientModule } from '@angular/common/http';
import { DataService } from './../../shared/services/data.service';
import { DiceService } from './../../shared/services/dice/dice.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLifepathRedJumpkitComponent } from './app-lifepath-red-jumpkit.component';

describe('AppLifepathRedJumpkitComponent', () => {
  let component: AppLifepathRedJumpkitComponent;
  let fixture: ComponentFixture<AppLifepathRedJumpkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLifepathRedJumpkitComponent ],
      providers: [DiceService, DataService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLifepathRedJumpkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
