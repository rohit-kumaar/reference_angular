import { Component, OnInit } from '@angular/core';

interface MyObject {
  name: string;
  email: string;
}

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.scss'],
})
export class ForLoopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users: Array<string> = ['Rohit', 'Bibhu', 'Lalit'];

  userDetails: Array<MyObject> = [
    { name: 'Rohit', email: 'rohit@gmail.com' },
    { name: 'Bibhu', email: 'bibhu@gmail.com' },
    { name: 'Lalit', email: 'lalit@gmail.com' },
  ];
}
