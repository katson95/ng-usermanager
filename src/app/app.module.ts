import { UserActions } from './action/registration.action';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { storeLogger } from 'ngrx-store-logger';
import { compose } from '@ngrx/core/compose';

import { AppComponent } from './app.component';
import { RegistrationEffects } from './effect/registration.effect';
import { LoginComponent } from './view/component/login/login.component';
import { ProfileComponent } from './view/component/profile/profile.component';
import { RegistrationComponent } from './view/component/registration/registration.component';
import { HeaderComponent } from './view/header/header.component';

import { schema } from './db';
import { userReducer } from './reducer/user.reducer';
import { userListReducer } from './reducer/userlist.reducer';
import { AuthenticationService } from './service/authentication.service';

import {
  InputTextModule,
  ButtonModule,
  ConfirmDialogModule,
  PanelModule,
  DropdownModule,
  InputTextareaModule,
  GrowlModule,
  DataListModule,
  DataGridModule,
  DataTableModule,
  SpinnerModule,
  SharedModule
} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    PanelModule,
    DropdownModule,
    InputTextareaModule,
    GrowlModule,
    DataListModule,
    DataGridModule,
    DataTableModule,
    SpinnerModule,
    AppRoutingModule,
    SharedModule,

    /**
     * Store Config
     */
    StoreModule.provideStore(
      compose(
        storeLogger(),
        combineReducers
      )({ user: userReducer, userList: userListReducer })
    ),

    /**
     * Effects Config
     */
    EffectsModule.run(RegistrationEffects),


    /**
    * Devtools Config
    */

    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    StoreLogMonitorModule
  ],
  providers: [UserActions, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
