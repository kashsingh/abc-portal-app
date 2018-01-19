import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.subnav{background: #DDDDDD;}']
})
export class HeaderComponent {
  
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


}
