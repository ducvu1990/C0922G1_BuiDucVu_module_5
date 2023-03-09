import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from '../i-rating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input()
  max = 10;
  @Input()
  ratingValue;
  @Input()
  showRatingValue;

  ratingUnits: Array<IRatingUnit> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.ratingValue = 5;
    this.showRatingValue = true;
    this.calculate(this.max, this.ratingValue);
  }


  calculate(max, ratingValue) {
    // this.ratingUnits = Array.from({length: max}, (_, index) => ({
    //   value: index + 1,
    //   active: index < ratingValue
    // }));
    for (let i = 0; i < max; i++) {
      this.ratingUnits[i] = {
        value: i + 1,
        active: i < ratingValue
      };
    }
  }

  select(index) {
    this.ratingValue = index + 1;
    this.reset();
    // this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    // this.rateChange.emit(this.ratingValue);
  }

  enter(index) {
    // this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
    for (let i = 0; i < this.max; i++) {
      this.ratingUnits[i].active = i <= index;
    }
  }

  reset() {
    // this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    for (let i = 0; i < this.max; i++) {
      this.ratingUnits[i].active = i < this.ratingValue;
    }
  }
}
