import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    authenticated = false;

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:8080/auth', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                this.authenticated = true;
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        this.authenticated = false;
        localStorage.removeItem('currentUser');
    }

    public getToken(): string {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.token;
    }

    public isAuthenticated(): boolean{
        return this.authenticated;
    }
    
}