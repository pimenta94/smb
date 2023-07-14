import { NgModule } from '@angular/core';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';

const PAGES = [
  SignupComponent,
  LoginComponent,
  DashboardComponent,
  AccountComponent,
];

@NgModule({
  declarations: [...PAGES],
  exports: [...PAGES],
})
export class PagesModule {}
