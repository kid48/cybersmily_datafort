import { JsonDataFiles } from './../../shared/json-data-files';
import { SeoService } from './../../shared/services/seo/seo.service';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { VehicleType } from '../../shared/models/maxmetal';

@Component({
  selector: 'cs-mmgenerator',
  templateUrl: './mmgenerator.component.html',
  styleUrls: ['./mmgenerator.component.css']
})
export class MmgeneratorComponent implements OnInit {

  vehicleTypes: VehicleType[];

  constructor(private data: DataService, private seo: SeoService) {
    this.vehicleTypes = [];
  }

  ngOnInit() {
    this.seo.updateMeta(
      'Cyberpunk 2020 Max Metal Generator',
      '2020-07, Cybersmily\'s Datafort Cyberpunk 2020 Max Metal Generator is an application to create vehicles in Cyberpunk 2020 using teh Maximum Metal sourcebook and rules.'
    );
    this.loadMaxMetaldata();
  }

  loadMaxMetaldata() {
    // load the max metal data
    this.data.GetJson(JsonDataFiles.CP2020_MAXMETAL_TYPES_JSON)
    .subscribe(resp => {
      this.vehicleTypes = resp.baseTypes;
    });
  }

}
