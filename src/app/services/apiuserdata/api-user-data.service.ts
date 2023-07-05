import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiUserDataService {
  API = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.API);
  }
}
