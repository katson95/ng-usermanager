import { UserActions } from '../../../action/registration.action';
import { Component, OnInit } from '@angular/core';
import { Message, SelectItem } from 'primeng/components/common/api';

import { Store } from '@ngrx/store';
import { User } from '../../../model/user.model';


import { AppState } from '../../../reducer/appState';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user$: Observable<User>;

  userList$: Observable<User[]>;


  msgs: Message[] = [];

  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  userList: Array<User> = [];

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private userActions: UserActions,
    public router: Router) {
    this.user$ = store.select('user');
    this.userList$ = store.select('userList');
  }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'username': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required)
    });

    this.genders = [];
    this.genders.push({ label: 'Select Gender', value: '' });
    this.genders.push({ label: 'Male', value: 'Male' });
    this.genders.push({ label: 'Female', value: 'Female' });

  }

  registerUser(user: User) {
    console.log(JSON.stringify(user));
    this.store.dispatch(this.userActions.addUser(user));
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success', detail: 'User ' + user.firstname + ' is now registered, you can now login' });
    this.userform.reset();
  }

}
