import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.subnav{background: #DDDDDD;}']
})
export class HeaderComponent {

  user = JSON.parse(localStorage.getItem('currentUser'))
  userType: string;

  headerLinks = [
    { link: ['/', 'admin'], icon: 'home'},
    { link: ['/', 'settings'], icon: 'cog'},
  ]; 

  subLinks = [
    { link : ['/', 'admin', 'student'], label: 'Manage Student' },
    { link : ['/', 'admin','course'], label: 'Manage Course' },
    { link : ['/', 'admin', 'reports'], label: 'Reports' },
  ];

  constructor(public auth: AuthenticationService) { }

  ngOnInit(){
      if(this.user.admin) {
          this.userType = 'admin';
      } else{
        this.userType = 'student';
      }

      if( this.userType === 'student'){
        this.headerLinks = [
          { link: ['/', 'student'], icon: 'home'},
          { link: ['/', 'settings'], icon: 'cog'},
        ];
        this.subLinks = [
          { link : ['/', 'student'], label: 'Dashboard' }
        ];
      }
  }

  logout(){
    this.auth.logout();
  }

}
