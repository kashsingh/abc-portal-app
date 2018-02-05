import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.injector.get(AuthenticationService); 
        // add authorization header with jwt token if available
        if (auth.getToken()) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${auth.getToken()}`
                }
            });
        }
        return next.handle(request);
    }
}