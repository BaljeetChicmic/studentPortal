import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor() { }
  userList: Array<userModal> = [
    {
      name: 'baljeet',
      email: 'baljeet@yopmail.com'
    },
    {
      name:'nandini',
      email:'nandini@gmail.com'
    },
    {
      name:'abcd',
      email:'abcd@gmail.com'
    }
  ]
  ngOnInit(): void 
  {

  }
  
}
interface userModal{
  name:string,
  email:string
}