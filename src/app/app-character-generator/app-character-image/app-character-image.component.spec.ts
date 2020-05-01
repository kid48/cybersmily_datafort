import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCharacterImageComponent } from './app-character-image.component';

describe('AppCharacterImageComponent', () => {
  let component: AppCharacterImageComponent;
  let fixture: ComponentFixture<AppCharacterImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCharacterImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCharacterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});