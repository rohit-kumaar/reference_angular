import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}

  users() {
    return [
      { name: 'Rohit', email: 'rohit@gmail.com' },
      { name: 'Bibhu', email: 'bibhu@gmail.com' },
      { name: 'Lalit', email: 'lalit@gmail.com' },
    ];
  }
}
