import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  date: Date;
  rfContract: FormGroup;
  customers: string[] = ['Trần Văn A', 'Trần Văn B'];
  facilitys: string[] = ['Villa', 'House', 'Room'];
  employees: string[] = ['Trần Văn C', 'Trần Văn D'];

  constructor() {
  }

  ngOnInit(): void {
    this.rfContract = new FormGroup({
      deposit: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
      startDate: new FormControl('', [Validators.required, this.checkStartDate]),
      endDate: new FormControl('', [Validators.required, this.checkEndDate]),
    });
  }

  onSubmit() {
    console.log(this.rfContract.value);
  }

  checkStartDate(control: AbstractControl) {
    const startDate = control.value;
    this.date = startDate;
    const today: Date = new Date();
    if (today.getFullYear() < startDate.getFullYear() && today.getDate() < startDate.getDate() && today.getMonth() < startDate.getMonth()) {
      return {invalidStarDate: true};
    }
    return null;
  }

  checkEndDate(control: AbstractControl) {
    const endDate = control.value;
    if (this.date.getFullYear() < endDate.getFullYear() && this.date.getDate() < endDate.getDate() &&
      this.date.getMonth() < endDate.getMonth()) {
      return {invalidEndDate: true};
    }
    return null;
  }
}
