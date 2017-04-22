import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {

  token: string;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  login(username: String, password: String) {
    console.log('Login service called with ' + username + 'and' + password);
    if (username === 'test' && password === 'test') {
      this.token = 'token';
      localStorage.setItem('token', this.token);
      return Observable.of('token');
    }

    return Observable.throw('authentication failure');
  }

  logout() {
    this.token = undefined;
    localStorage.removeItem('token');
    return Observable.of(true);
  }

}
