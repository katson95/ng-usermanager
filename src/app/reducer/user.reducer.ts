import { User } from '../model/user.model';
import { ActionReducer, Action } from '@ngrx/store';


export function userReducer(state: any = null, { type, payload }) {
  switch (type) {
    case 'ADD_USER':
      console.log('Payload is: ' + JSON.stringify(payload));
      return payload;
    default:
      return state;
  }
}