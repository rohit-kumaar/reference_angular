import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiUserDataService {
  API = 'https://jsonplaceholder.typicode.com/users';

  POST_API = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.API);
  }

  addUser(data: any) {
    return this.http.post(this.POST_API, data);
  }
}
