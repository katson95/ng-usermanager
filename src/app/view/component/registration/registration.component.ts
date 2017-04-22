import { UserActions } from '../../../action/registration.action';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, SelectItem } from 'primeng/components/common/api';

import { Store } from '@ngrx/store';
import { User } from '../../../model/user.model';


import { AppState } from '../../../reducer/appState';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
    private userActions: UserActions, ) {
    this.user$ = store.select('user');
    this.userList$ = store.select('userList');
  }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'username': new FormControl(''),
      'gender': new FormControl('')
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
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
  }


}
