import { LifeEventsGeneratorService } from './../../shared/services/lifepath/life-events-generator.service';
import { LifepathEventsList } from './../../shared/models/lifepath/lifepath-events-list';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cs-lifepath-events',
  templateUrl: './lifepath-events.component.html',
  styleUrls: ['./lifepath-events.component.css']
})
export class LifepathEventsComponent implements OnInit {
  @Input()
  lifepathSource: string;

  @Output()
  generateEvents: EventEmitter<LifepathEventsList> = new EventEmitter<LifepathEventsList>();

  levents: LifepathEventsList = new LifepathEventsList();
  hasEventful = false;
  InputYear: string;

  constructor(private lifeEventGenService: LifeEventsGeneratorService) { }

  ngOnInit() {
  }


  /**
   * generate the list of life events, starting from age 16.
   *
   * @memberof LifepathEventsComponent
   */
  generateLifeEvents() {
    this.lifeEventGenService
    .GenerateLifeEvents(this.lifepathSource, this.InputYear, this.hasEventful)
    .subscribe( data => {
      this.levents = data;
      this.InputYear = this.levents.NumberOfYears.toString();
      this.emitLifeEvents(this.levents);
    });
  }

  emitLifeEvents(events: LifepathEventsList) {
    this.generateEvents.emit(events);
  }
}
