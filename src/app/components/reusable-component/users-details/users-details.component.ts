import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() userDetail: { name: string; email: string } = {
    name: '',
    email: '',
  };
}
