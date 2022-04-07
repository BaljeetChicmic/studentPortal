import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/app/constant';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {
  paths = CONSTANTS.MAIN_PATH
  constructor() { }

  ngOnInit(): void {
  }

}
