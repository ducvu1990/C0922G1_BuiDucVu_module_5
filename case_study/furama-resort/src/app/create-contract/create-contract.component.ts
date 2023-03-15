import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  abc = new Date();
  startsDate = new Date();
  rfContract: FormGroup;
  customers: string[];
  facilitys: string[];
  employees: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.customers = ['Trần Văn A', 'Trần Văn B'];
    this.facilitys = ['Villa', 'House', 'Room'];
    this.employees = ['Trần Văn C', 'Trần Văn D'];
    this.rfContract = new FormGroup({
      deposit: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
      startDate: new FormControl('', [Validators.required, this.checkStartDate.bind(this)]),
      endDate: new FormControl('', [Validators.required, this.checkEndDate.bind(this)]),
      customers: new FormControl(),
      facilitys: new FormControl(),
      employees: new FormControl()
    });
    console.log(this.abc);
  }

  onSubmit() {
    debugger
    console.log(this.rfContract.value);
  }

  checkStartDate(control: AbstractControl) {
    const startDate = new Date(control.value);
    this.startsDate = startDate;
    const today = new Date();
    if (today.getDate() > startDate.getDate()) {
      return {invalidstartdate: true};
    }
    return null;
  }

  checkEndDate(control: AbstractControl) {
    const endDate = new Date(control.value);
    if (this.startsDate.getDate() > endDate.getDate()) {
      return {invalidenddate: true};
    }
    return null;
  }
}
