import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.scss'],
})
export class SwitchCaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  color: string = 'blue';
}
