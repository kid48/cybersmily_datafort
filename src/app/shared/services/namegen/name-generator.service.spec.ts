import { HttpClientModule } from '@angular/common/http';
import { DataService } from './../data.service';
import { DiceService } from './../dice/dice.service';
import { TestBed } from '@angular/core/testing';

import { NameGeneratorService } from './name-generator.service';

describe('NameGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DiceService, DataService],
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: NameGeneratorService = TestBed.get(NameGeneratorService);
    expect(service).toBeTruthy();
  });
});
