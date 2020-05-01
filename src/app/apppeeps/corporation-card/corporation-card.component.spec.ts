import { CorporationCard } from '../../shared/models/corporation';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './../../shared/services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporationCardComponent } from './corporation-card.component';

describe('CorporationCardComponent', () => {
  let component: CorporationCardComponent;
  let fixture: ComponentFixture<CorporationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporationCardComponent ],
      imports: [
        HttpClientTestingModule,
        ModalModule.forRoot()
      ],
      providers: [
        DataService,
        BsModalService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporationCardComponent);
    component = fixture.componentInstance;
    const corp: CorporationCard = {
      name: 'test corporation',
      img: 'corp',
      slogan: 'this is a test corporation'
    };
    component.corp = corp;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});