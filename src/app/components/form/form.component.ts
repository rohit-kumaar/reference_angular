import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  getInputValue: string = '';
  getPlaceholderValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  getValueFunction(value: string) {
    this.getInputValue = value;
  }

  getPlaceholderValueFunction(value: string) {
    this.getPlaceholderValue = value;
  }

  // <!-- FORM START  -->
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
  // <!-- FORM END  -->
}
