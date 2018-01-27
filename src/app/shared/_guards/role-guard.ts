import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // this will be passed from the route config
    // on the data property
    let expectedRole = route.data.expectedRole;
    
    let user  = JSON.parse(localStorage.getItem('currentUser'));
    let userType = 'student';

    if (user.admin){
      userType = 'admin';
    }

    if ( expectedRole !== userType ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}