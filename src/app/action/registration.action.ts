import { User } from '../model/user.model';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';


@Injectable()
export class UserActions {

  static ADD_USER = 'ADD_USER';
  static REMOVE_USER = 'REMOVE_USER';

  addUser(user: User): Action {
    return {
      type: UserActions.ADD_USER,
      payload: user

    };
  }


  deleteUser(user: User): Action {
    return {
      type: UserActions.REMOVE_USER,
    };
  }

}