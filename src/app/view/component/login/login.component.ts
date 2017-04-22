import { AuthenticationService } from '../../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: boolean = false;

  constructor(fb: FormBuilder, public authenticator: AuthenticationService, public router: Router) {

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  loginUser(value: any) {
    console.log(JSON.stringify(value));
    this.authenticator.login(value.username, value.password)
      .subscribe(
      (token: any) => this.router.navigate(['/user-profile']),
      () => { this.error = true; }
      );
  }



}
