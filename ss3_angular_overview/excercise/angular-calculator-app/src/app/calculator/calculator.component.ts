import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
result = undefined;
  constructor() { }

  ngOnInit(): void {
  }

  tong(soThuNhat: string, soThuHai: string) {
    this.result = parseInt(soThuNhat, 10) + parseInt(soThuHai, 10);
  }
  hieu(soThuNhat: string, soThuHai: string) {
    this.result = parseInt(soThuNhat, 10) - parseInt(soThuHai, 10);
  }
  nhan(soThuNhat: string, soThuHai: string) {
    this.result = parseInt(soThuNhat, 10) * parseInt(soThuHai, 10);
  }
  chia(soThuNhat: string, soThuHai: string) {
    this.result = parseInt(soThuNhat, 10) / parseInt(soThuHai, 10);
  }
}
