import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
    ) { }

    public login(user: any): Observable<any> {
        return this.http.post<any>(`http://localhost:3000/auth/login`, user);
    }

    public logout(): void {
        localStorage.removeItem('token');
    }

    public isAuthenticated(): boolean {
        return !!this.getDecodedToken();
    }

    public getUserId(): string {
        return this.getDecodedToken().id;
    }

    private getDecodedToken() {
        const token: string = localStorage.getItem('token');

        if (!token) {
            return null;
        }

        return (jwt_decode(token) as any);
    }
}
