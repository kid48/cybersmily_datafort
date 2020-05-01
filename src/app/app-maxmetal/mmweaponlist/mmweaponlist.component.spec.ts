import { MmweaponComponent } from './../mmweapon/mmweapon.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmweaponlistComponent } from './mmweaponlist.component';

describe('MmweaponlistComponent', () => {
  let component: MmweaponlistComponent;
  let fixture: ComponentFixture<MmweaponlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MmweaponlistComponent,
        MmweaponComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmweaponlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});