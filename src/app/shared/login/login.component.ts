import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    unauthorize = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                      // A client-side or network error occurred. Handle it accordingly.
                      console.log('An error occurred:', err.error.message);
                    } else {
                      // The backend returned an unsuccessful response code.
                      // The response body may contain clues as to what went wrong,
                    //   this.alertService.error(err.error.message);
                        this.unauthorize = true;
                    }
                    this.loading = false;
                }
            );
    }
}
