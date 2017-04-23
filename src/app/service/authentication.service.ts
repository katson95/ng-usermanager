import { User } from '../model/user.model';
import { AppState } from '../reducer/appState';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationService implements OnInit {

  token: string;
  loginSuccessfull: boolean = false;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void { }

  login(username: String, password: String, registeredUsers: User[]) {
    this.loginSuccessfull = this.authenticateUser(username, password, registeredUsers);
    console.log('Final result !' + this.loginSuccessfull);
    if (this.loginSuccessfull) {
      this.token = 'token';
      localStorage.setItem('token', this.token);
      return Observable.of('token');
    }

    return Observable.throw('authentication failure');
  }

  authenticateUser(username: String, password: String, users: User[]) {
    let result = false;
    users.forEach(function(user) {
      if (username === user.username && password === user.password) {
        console.log('Success!');
        result = true;
      } else {
        console.log('Failed!');
        result = false;
      }

    });
    return result;
  }

  logout() {
    this.token = undefined;
    localStorage.removeItem('token');
    return Observable.of(true);
  }



}
