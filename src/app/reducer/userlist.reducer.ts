import { User } from '../model/user.model';
import { ActionReducer, Action } from '@ngrx/store';


export const ADD_USER = 'ADD_USER';

const initialState = [];

export function userListReducer(state: User[] = initialState, action: Action): User[] {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}
