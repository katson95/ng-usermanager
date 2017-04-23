import { UserActions } from './action/registration.action';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { compose } from '@ngrx/core/compose';

import { AppComponent } from './app.component';
import { RegistrationEffects } from './effect/registration.effect';
import { LoginComponent } from './view/component/login/login.component';
import { ProfileComponent } from './view/component/profile/profile.component';
import { RegistrationComponent } from './view/component/registration/registration.component';
import { HeaderComponent } from './view/header/header.component';

import { schema } from './db';
import { rootReducer } from './reducer/root.reducer';

import { AuthenticationService } from './service/authentication.service';
import { storeLogger } from 'ngrx-store-logger';

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
      rootReducer
    ),

    /**
     * Effects Config
     */
    EffectsModule.run(RegistrationEffects),

  ],
  providers: [UserActions, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
