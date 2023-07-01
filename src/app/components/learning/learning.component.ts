import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
})
export class LearningComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Angular Practice';
  number = 10;
  printInputValue: string = '';
  printOnClickValue: string = '';



  interpolationMethod() {
    return 'Interpolation Method';
  }

  myFunction() {
    alert('My Function');
  }

  myFunctionWithArgument(firstName: string, SecondName: string) {
    alert(`${firstName} ${SecondName}`);
  }

  keyup(value: any) {
    console.log(value);
  }

  printVal(value: string) {
    this.printInputValue = value;
  }

  printOnClick(value: string) {
    this.printOnClickValue = value;
  }

  // counter(type: string) {
  //   type === 'add' ? this.count++ : this.count--;
  // }
}
