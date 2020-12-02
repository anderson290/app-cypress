import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDataSource = new BehaviorSubject<any>(null);
  userData = this.userDataSource.asObservable();


  constructor() { }

  setUserData(user) {
    this.userDataSource.next(user);
  }

  getUserData() {
    return this.userData;
  }

}
