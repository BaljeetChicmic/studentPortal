import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './commonComp/login/login.component';
import { RegisterComponent } from './commonComp/register/register.component';
import { ForgotPasswordComponent } from './commonComp/forgot-password/forgot-password.component';
import { DashboardComponent } from './commonComp/dashboard/dashboard.component';
import { HeaderNavigationComponent } from './commonComp/header-navigation/header-navigation.component';
import { ResetPasswordComponent } from './commonComp/reset-password/reset-password.component';
import { StudentListComponent } from './student-list/student-list.component';
import { MyStudentComponent } from './my-student/my-student.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    HeaderNavigationComponent,
    ResetPasswordComponent,
    StudentListComponent,
    MyStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
