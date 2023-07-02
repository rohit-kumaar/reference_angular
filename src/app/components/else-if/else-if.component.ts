import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-else-if',
  templateUrl: './else-if.component.html',
  styleUrls: ['./else-if.component.scss'],
})
export class ElseIfComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  color: string = 'red';
}
