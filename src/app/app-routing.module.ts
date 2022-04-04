import { registerLocaleData } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './commonComp/forgot-password/forgot-password.component';
import { LoginComponent } from './commonComp/login/login.component';
import { RegisterComponent } from './commonComp/register/register.component';
import { CONSTANTS } from './constant';

const routes: Routes = [
  {
    path:CONSTANTS.AUTH_PATHS.SIGNUP, component:RegisterComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.LOGIN, component:LoginComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.FORGOT_PASS, component:ForgotPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
