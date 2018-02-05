import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: ``
})
export class LandingPageComponent implements OnInit{

    user: any;

    constructor(private router: Router){}

    ngOnInit(){
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      if(this.user.admin){
        this.router.navigateByUrl('/admin');
      }else{
        this.router.navigateByUrl('/student');
      }   
    }
} 