import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../shared/_models/interfaces';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{
  
  currentUser: any;  

  ngOnInit(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
}
