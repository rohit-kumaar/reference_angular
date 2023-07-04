import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() parentFunctionEvent = new EventEmitter<any>();
}
