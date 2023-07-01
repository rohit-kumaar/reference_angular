import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count: number = 0;

  constructor() {}

  ngOnInit(): void {}

  counter(type: string): any {
    if (type === 'sub') {
      if (this.count <= 0) return (this.count = 0);
      this.count--;
    } else {
      if (this.count >= 10) return (this.count = 10);
      this.count++;
    }
  }
}
