import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [
    {
      id: 1,

      name: 'Bùi Đức Vũ',

      dateOfBirth: new Date(1990, 1, 15),

      gender: true,

      idCard: '123456789',

      phoneNumber: '012345678',

      email: 'vu@gmail.com',

      address: 'Quảng Trị',

      customerType: 'Gold'
    },
    {
      id: 1,

      name: 'Bùi Đức Vũ',

      dateOfBirth: new Date(1990, 1, 15),

      gender: true,

      idCard: '123456789',

      phoneNumber: '012345678',

      email: 'vu@gmail.com',

      address: 'Quảng Trị',

      customerType: 'Gold'
    },
    {
      id: 1,

      name: 'Bùi Đức Vũ',

      dateOfBirth: new Date(1990, 1, 15),

      gender: true,

      idCard: '123456789',

      phoneNumber: '012345678',

      email: 'vu@gmail.com',

      address: 'Quảng Trị',

      customerType: 'Gold'
    },
    {
      id: 1,

      name: 'Bùi Đức Vũ',

      dateOfBirth: new Date(1990, 1, 15),

      gender: true,

      idCard: '123456789',

      phoneNumber: '012345678',

      email: 'vu@gmail.com',

      address: 'Quảng Trị',

      customerType: 'Gold'
    },
    {
      id: 1,

      name: 'Bùi Đức Vũ',

      dateOfBirth: new Date(1990, 1, 15),

      gender: true,

      idCard: '123456789',

      phoneNumber: '012345678',

      email: 'vu@gmail.com',

      address: 'Quảng Trị',

      customerType: 'Gold'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
