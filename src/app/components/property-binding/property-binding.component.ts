import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss'],
})
export class PropertyBindingComponent implements OnInit {
  myName: string = 'Rohit Kumar';
  disable: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  disableFalse() {
    this.disable = false;
  }
}
