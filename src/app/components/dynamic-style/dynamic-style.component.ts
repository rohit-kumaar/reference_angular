import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  templateUrl: './dynamic-style.component.html',
  styleUrls: ['./dynamic-style.component.scss'],
})
export class DynamicStyleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  color: string = 'red';
  bgColor: string = 'black';

  updateColor() {
    this.color = 'blue';
    this.bgColor = '#ddd';
  }
}
