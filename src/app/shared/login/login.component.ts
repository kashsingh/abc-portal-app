import { Component } from '@angular/core';
import { AuthenticationService } from '../_services/index';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    model: any = {};
    loading = false;
    unauthorize = false;

    constructor(private authenticationService: AuthenticationService) { }

    tryLogin() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => { },
                (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                      // A client-side or network error occurred. Handle it accordingly.
                      console.log('An error occurred:', err.error.message);
                    } else {
                      // The backend returned an unsuccessful response code.
                      // The response body may contain clues as to what went wrong,
                      this.unauthorize = true;
                    }
                    this.loading = false;
                }
            );
    }
}
