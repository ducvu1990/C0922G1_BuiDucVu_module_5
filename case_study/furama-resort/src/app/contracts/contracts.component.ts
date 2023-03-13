import {Component, OnInit} from '@angular/core';
import {Contract} from '../model/contract';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contracts: Contract[] = [
    {
      id: 1,
      startDate: new Date(2022, 2, 22),
      endDate: new Date(2022, 3, 22),
      deposit: 0,
      employee: 'Bùi Đức Vũ',
      customer: 'Bùi Đức Vũ',
      facility: 'Villa',
      totalCost: 1000000,
      attachFacility: 'Xe đạp'
    },
    {
      id: 1,
      startDate: new Date(2022, 2, 22),
      endDate: new Date(2022, 3, 22),
      deposit: 0,
      employee: 'Bùi Đức Vũ',
      customer: 'Bùi Đức Vũ',
      facility: 'Villa',
      totalCost: 1000000,
      attachFacility: 'Xe đạp'
    },
    {
      id: 1,
      startDate: new Date(2022, 2, 22),
      endDate: new Date(2022, 3, 22),
      deposit: 0,
      employee: 'Bùi Đức Vũ',
      customer: 'Bùi Đức Vũ',
      facility: 'Villa',
      totalCost: 1000000,
      attachFacility: 'Xe đạp'
    },
    {
      id: 1,
      startDate: new Date(2022, 2, 22),
      endDate: new Date(2022, 3, 22),
      deposit: 0,
      employee: 'Bùi Đức Vũ',
      customer: 'Bùi Đức Vũ',
      facility: 'Villa',
      totalCost: 1000000,
      attachFacility: 'Xe đạp'
    },
    {
      id: 1,
      startDate: new Date(2022, 2, 22),
      endDate: new Date(2022, 3, 22),
      deposit: 0,
      employee: 'Bùi Đức Vũ',
      customer: 'Bùi Đức Vũ',
      facility: 'Villa',
      totalCost: 1000000,
      attachFacility: 'Xe đạp'
    },
    {
      id: 1,
      startDate: new Date(2022, 2, 22),
      endDate: new Date(2022, 3, 22),
      deposit: 0,
      employee: 'Bùi Đức Vũ',
      customer: 'Bùi Đức Vũ',
      facility: 'Villa',
      totalCost: 1000000,
      attachFacility: 'Xe đạp'
    },
    {
      id: 1,
      startDate: new Date(2022, 2, 22),
      endDate: new Date(2022, 3, 22),
      deposit: 0,
      employee: 'Bùi Đức Vũ',
      customer: 'Bùi Đức Vũ',
      facility: 'Villa',
      totalCost: 1000000,
      attachFacility: 'Xe đạp'
    },
    {
      id: 1,
      startDate: new Date(2022, 2, 22),
      endDate: new Date(2022, 3, 22),
      deposit: 0,
      employee: 'Bùi Đức Vũ',
      customer: 'Bùi Đức Vũ',
      facility: 'Villa',
      totalCost: 1000000,
      attachFacility: 'Xe đạp'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
