import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-student',
  templateUrl: './my-student.component.html',
  styleUrls: ['./my-student.component.scss']
})
export class MyStudentComponent implements OnInit {

  constructor() { }
  userList:Array<userModel>=[
    {
      name:'rohit',
      email:'rohit@yopmail'
    },
    {
      name:'nandini',
      email:'nandini@gmail.com'
    },
    {
      name:'hello',
      email:'hello@yopmail.com'
    }
  ]
  ngOnInit(): void {
  }

}
interface userModel{
  name:string,
  email:string
}
