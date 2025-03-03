import { CommonUiModule } from './../../shared/modules/common-ui/common-ui.module';
import { LongpressDirective } from './../../shared/directives/longpress.directive';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MminputComponent } from './mminput.component';

describe('MminputComponent', () => {
  let component: MminputComponent;
  let fixture: ComponentFixture<MminputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MminputComponent,
        LongpressDirective
      ],
      imports: [
        CommonUiModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MminputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
