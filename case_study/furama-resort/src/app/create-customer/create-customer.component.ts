import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  rfCustomer: FormGroup;
  customerTypes: string[] = ['Gold', 'Silver', 'Diamond'];

  constructor() {
  }

  ngOnInit(): void {
    this.rfCustomer = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(84)?(90|91)\\d{7}$')]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, this.checkAge]),
    });
  }

  onSubmit() {
    console.log(this.rfCustomer.value);
  }

  checkAge(control: AbstractControl) {
    const birthday = control.value;
    const today: Date = new Date(); // Ngày hiện tại

    let age: number = today.getFullYear() - birthday.getFullYear(); // Tính số năm
    const monthDiff: number = today.getMonth() - birthday.getMonth(); // Tính số tháng

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
      age--; // Nếu chưa đến sinh nhật thì giảm tuổi đi 1
    }

    if (age < 18) {
      return {invalidAge: true};
    }
    return null;
  }
}
