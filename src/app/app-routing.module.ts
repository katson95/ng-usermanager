
import { LoginComponent } from './view/component/login/login.component';
import { ProfileComponent } from './view/component/profile/profile.component';
import { RegistrationComponent } from './view/component/registration/registration.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-profile', component: ProfileComponent }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}