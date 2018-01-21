import { Component } from '@angular/core';
import { AuthenticationService } from '../../../_services/index';

@Component({
  selector: 'app-main',
  templateUrl:'./main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(public auth: AuthenticationService) { }
}
