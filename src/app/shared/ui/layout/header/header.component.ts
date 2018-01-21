import { Component } from '@angular/core';
import { AuthenticationService } from '../../../_services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.subnav{background: #DDDDDD;}']
})
export class HeaderComponent {
  constructor(public auth: AuthenticationService) { }
  
  headerLinks = [
    { link: ['/', 'admin'], icon: 'home'},
    { link: ['/', 'settings'], icon: 'cog'},
  ];

  subLinks = [
    { link : ['/', 'admin', 'student'], label: 'Manage Student' },
    { link : ['/', 'admin','course'], label: 'Manage Course' },
    { link : ['/', 'admin', 'reports'], label: 'Reports' },
    { link : ['/', 'student'], label: 'Student View' },
  ];

  logout(){
    this.auth.logout();
  }

}
