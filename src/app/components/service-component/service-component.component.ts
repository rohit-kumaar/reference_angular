import { Component, OnInit } from '@angular/core';
import { ApiUserDataService } from 'src/app/services/apiuserdata/api-user-data.service';
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
  apiUsers: any;

  constructor(
    private userdata: UserdataService,
    private apiUserData: ApiUserDataService
  ) {
    this.users = userdata.users();
    this.apiUserData.users().subscribe((data) => (this.apiUsers = data));
  }
  ngOnInit(): void {}
}
