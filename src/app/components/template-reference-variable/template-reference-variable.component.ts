import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.scss'],
})
export class TemplateReferenceVariableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // tempFunction(data: any) {
  //   console.log(data);
  // }
  tempFunction(data: HTMLInputElement) {
    console.log(data);
  }
}
