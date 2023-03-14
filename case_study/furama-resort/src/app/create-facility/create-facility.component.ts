import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  rfFacility: FormGroup;
  facilityTypes: string[] = ['VILLA', 'HOUSE', 'ROOM'];
  rentTypes: string[] = ['YEAR', 'MONTH', 'DAY', 'HOUR'];

  constructor() {
  }

  ngOnInit(): void {
    this.rfFacility = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[^\\d]+$')]),
      area: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', Validators.required),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', Validators.required),
      poolArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
      facilityFree: new FormControl('', [Validators.required]),
      facilityType: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.rfFacility.value);
  }
}
