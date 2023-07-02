import { Component, OnInit } from '@angular/core';

interface MyObject {
  name: string;
  email: string;
  socialAccount: Array<string>;
}

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.scss'],
})
export class NestedLoopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userDetails: Array<MyObject> = [
    {
      name: 'Rohit',
      email: 'rohit@gmail.com',
      socialAccount: ['fb', 'gmail', 'inst'],
    },
    {
      name: 'Bibhu',
      email: 'bibhu@gmail.com',
      socialAccount: ['youtube', 'snap', 'twitter'],
    },
    {
      name: 'Lalit',
      email: 'lalit@gmail.com',
      socialAccount: ['yahoo', 'skype', 'whatsapp'],
    },
  ];
}
