import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rfCustomer: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.rfCustomer = new FormGroup({
      email1: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    console.log(this.rfCustomer.value);
  }
}
