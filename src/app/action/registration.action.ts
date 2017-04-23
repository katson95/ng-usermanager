import { User } from '../model/user.model';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';


@Injectable()
export class UserActions {

  static ADD_USER = 'ADD_USER';
  static ADD_USER_SESSION = 'ADD_USER_SESSION';

  addUser(user: User): Action {
    return {
      type: UserActions.ADD_USER,
      payload: user

    };
  }


  addUserToSession(user: User): Action {
    console.log('logged in user :' + JSON.stringify(user));
    return {
      type: UserActions.ADD_USER_SESSION,
      payload: user
    };
  }

}