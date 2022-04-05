import { registerLocaleData } from '@angular/common';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './commonComp/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './commonComp/forgot-password/forgot-password.component';
import { LoginComponent } from './commonComp/login/login.component';
import { RegisterComponent } from './commonComp/register/register.component';
import { CONSTANTS } from './constant';
import { MyStudentComponent } from './my-student/my-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path:CONSTANTS.AUTH_PATHS.SIGNUP, component:RegisterComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.LOGIN, component:LoginComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.FORGOT_PASS, component:ForgotPasswordComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.MY_STUDENT, component:MyStudentComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.STUDENT_LIST, component:StudentListComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.DASHBOARD,component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
