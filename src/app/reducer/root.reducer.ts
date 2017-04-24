
import { AppState } from './appState';
import { userReducer } from './user.reducer';
import { userListReducer } from './userlist.reducer';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';

import { storeLogger } from 'ngrx-store-logger';


const reducers = {
  user: userReducer,
  userList: userListReducer,
};

const developmentReducer = compose(storeLogger(), combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
  return developmentReducer(state, action);

}