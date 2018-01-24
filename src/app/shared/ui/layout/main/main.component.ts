import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl:'./main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  // isLoggedIn: Observable<boolean>;

  ngOnInit(){
    // this.isLoggedIn = this.auth.isAuthenticated();
  }


  // constructor(public auth: AuthenticationService) { }
}
