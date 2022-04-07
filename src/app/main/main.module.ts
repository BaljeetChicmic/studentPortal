import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { CONSTANTS } from '../constant';
import { MyStudentComponent } from './my-student/my-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '', component:MainComponent, children: [
    {
      path:'', redirectTo:CONSTANTS.MAIN_PATH.DASHBOARD, pathMatch:'full'
    },
    { 
      path:CONSTANTS.MAIN_PATH.DASHBOARD, component:DashboardComponent 
    },
    {
      path:CONSTANTS.MAIN_PATH.STUDENT_LIST, component:StudentListComponent
    },
    {
      path:CONSTANTS.MAIN_PATH.MY_STUDENT, component:MyStudentComponent
    }

  ]}
]

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    HeaderNavigationComponent,
    MyStudentComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
