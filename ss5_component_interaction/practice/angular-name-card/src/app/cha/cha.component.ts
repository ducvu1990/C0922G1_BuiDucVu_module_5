import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.css']
})
export class ChaComponent implements OnInit {
  cardName = 'Professional Dev';
  email = 'prodev@codegym.vn';
  phone = '0123456789';

  constructor() {
  }

  ngOnInit(): void {
  }

}
