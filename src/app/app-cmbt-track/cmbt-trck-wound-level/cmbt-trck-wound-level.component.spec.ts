import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmbtTrckWoundLevelComponent } from './cmbt-trck-wound-level.component';

describe('CmbtTrckWoundLevelComponent', () => {
  let component: CmbtTrckWoundLevelComponent;
  let fixture: ComponentFixture<CmbtTrckWoundLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmbtTrckWoundLevelComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmbtTrckWoundLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
