import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  rfCustomer: FormGroup;
  countrys: string[] = ['Thái Lan', 'Việt Nam', 'Trung Quốc', 'Nhật Bản', 'Hàn Quốc', 'Nga', 'Mỹ'];

  constructor() {
  }

  ngOnInit(): void {
    this.rfCustomer = new FormGroup({
      email1: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    });
  }

  onSubmit() {
    console.log(this.rfCustomer.value);
  }

  checkAge(control: AbstractControl) {
    const age = control.value;
    if (age < 18) {
      return {invalidAge: true};
    }
    return null;
  }
}
