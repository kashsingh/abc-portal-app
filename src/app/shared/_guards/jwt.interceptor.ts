import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(public auth: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (this.auth.getToken()) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });
        }

        return next.handle(request);
    }
}