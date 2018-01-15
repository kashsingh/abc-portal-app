import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  
  headerLinks = [
    { link: ['/', 'home'], icon: 'home'},
    { link: ['/', 'settings'], icon: 'cog'},
  ];

  subLinks = [
    { link : ['/', 'home'], label: 'Dashboard' },
    { link : ['/', 'student'], label: 'Manage Student' },
    { link : ['/', 'course'], label: 'Manage Course' },
  ];


}
