import { User } from '../../../model/user.model';
import { AuthenticationService } from '../../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


import { AppState } from '../../../reducer/appState';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: boolean = false;
  msgs: Message[] = [];
  userList$: Observable<User[]>;

  userList: User[];


  constructor(fb: FormBuilder,
    private store: Store<AppState>,
    public authenticator: AuthenticationService,
    public router: Router) {

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userList$ = this.store.select('userList');
  }

  ngOnInit() {
    this.userList = this.getState(this.store);
    console.log('Registered users :' + JSON.stringify(this.userList));
  }

  loginUser(value: any) {
    console.log(JSON.stringify(value));
    this.authenticator.login(value.username, value.password, this.userList)
      .subscribe(
      (token: any) => this.router.navigate(['/user-profile']),
      () => {
        console.log('Login failed');
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error', detail: 'Username and/or Password incorrect, please try again!' });
        this.loginForm.reset();
      }
      );
 }

  getState(store: Store<AppState>): User[] {
    let state: AppState;
    store.take(1).subscribe(s => state = s);
    return state.userList;
  }



}
