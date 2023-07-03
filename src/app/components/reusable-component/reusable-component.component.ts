import { Component, OnInit } from '@angular/core';

interface MyObject {
  name: string;
  email: string;
}

@Component({
  selector: 'app-reusable-component',
  templateUrl: './reusable-component.component.html',
  styleUrls: ['./reusable-component.component.scss'],
})
export class ReusableComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userDetails: Array<MyObject> = [
    { name: 'Rohit', email: 'rohit@gmail.com' },
    { name: 'Bibhu', email: 'bibhu@gmail.com' },
    { name: 'Lalit', email: 'lalit@gmail.com' },
  ];
}
