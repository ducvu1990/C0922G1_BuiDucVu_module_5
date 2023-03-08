import {Component, OnInit} from '@angular/core';
import {Facility} from '../model/facility';

@Component({
  selector: 'app-facilitys',
  templateUrl: './facilitys.component.html',
  styleUrls: ['./facilitys.component.css']
})
export class FacilitysComponent implements OnInit {
  facilitys: Facility[] = [
    {
      descriptionOtherConvenience: 'https://cdn1.ivivu.com/iVivu/2019/11/28/13/furama-resort-da-nang-18-cr-800x450.jpg',
      standardRoom: 'Phòng thoáng mát',
      facilityType: 'Room'
    },
    {
      descriptionOtherConvenience: 'https://cdn1.ivivu.com/iVivu/2019/11/28/13/furama-resort-da-nang-18-cr-800x450.jpg',
      standardRoom: 'Phòng thoáng mát',
      facilityType: 'Villa'
    },
    {
      descriptionOtherConvenience: 'https://cdn1.ivivu.com/iVivu/2019/11/28/13/furama-resort-da-nang-18-cr-800x450.jpg',
      standardRoom: 'Phòng thoáng mát, có thêm tivi',
      facilityType: 'House'
    },
    {
      descriptionOtherConvenience: 'https://cdn1.ivivu.com/iVivu/2019/11/28/13/furama-resort-da-nang-18-cr-800x450.jpg',
      standardRoom: 'Phòng thoáng mát, có điều hòa',
      facilityType: 'Villa'
    },
    {
      descriptionOtherConvenience: 'https://cdn1.ivivu.com/iVivu/2019/11/28/13/furama-resort-da-nang-18-cr-800x450.jpg',
      standardRoom: 'Phòng thoáng mát',
      facilityType: 'Room'
    },
    {
      descriptionOtherConvenience: 'https://cdn1.ivivu.com/iVivu/2019/11/28/13/furama-resort-da-nang-18-cr-800x450.jpg',
      standardRoom: 'Phòng thoáng mát',
      facilityType: 'Villa'
    },
    {
      descriptionOtherConvenience: 'https://cdn1.ivivu.com/iVivu/2019/11/28/13/furama-resort-da-nang-18-cr-800x450.jpg',
      standardRoom: 'Phòng thoáng mát',
      facilityType: 'Villa'
    },
    {
      descriptionOtherConvenience: 'https://cdn1.ivivu.com/iVivu/2019/11/28/13/furama-resort-da-nang-18-cr-800x450.jpg',
      standardRoom: 'Phòng thoáng mát, view đẹp',
      facilityType: 'House'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
