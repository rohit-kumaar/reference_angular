import { Component, OnInit } from '@angular/core';
import { ApiUserDataService } from 'src/app/services/apiuserdata/api-user-data.service';

@Component({
  selector: 'app-post-api-method',
  templateUrl: './post-api-method.component.html',
  styleUrls: ['./post-api-method.component.scss'],
})
export class PostApiMethodComponent implements OnInit {
  constructor(private apiUserData: ApiUserDataService) {}

  ngOnInit(): void {}

  loginFormFunction(data: any) {
    this.apiUserData.addUser(data).subscribe((data) => {
      console.log(data);
    });
  }
}
