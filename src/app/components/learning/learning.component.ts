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
  count: number = 0;
  myName = 'Rohit Kumar';
  disable = true;
  show = true;

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

  counter(type: string): any {
    if (type === 'sub') {
      if (this.count <= 0) return (this.count = 0);
      this.count--;
    } else {
      if (this.count >= 10) return (this.count = 10);
      this.count++;
    }
  }

  disableFalse() {
    this.disable = false;
  }
}
