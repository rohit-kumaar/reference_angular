import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata/userdata.service';

interface MyObject {
  name: string;
  email: string;
}

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.scss'],
})
export class ServiceComponentComponent implements OnInit {
  users: Array<MyObject> = [];

  constructor(private userdata: UserdataService) {
    this.users = userdata.users();
  }
  ngOnInit(): void {}
}
