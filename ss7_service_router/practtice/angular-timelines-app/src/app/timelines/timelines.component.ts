import {Component, OnInit} from '@angular/core';
import {DataUtilService} from '../service/data-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {

  output = '';

  constructor(private dateUtilService: DataUtilService) {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }


}
