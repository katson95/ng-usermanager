// import {compose} from '@ngrx/core/compose';
// import {combineReducers} from '@ngrx/store';


import { User } from '../model/user.model';
export class AppState {
  user: User;
  userList: User[];
};
