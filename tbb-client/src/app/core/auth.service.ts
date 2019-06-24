import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
    private userRoleSubject = new BehaviorSubject<string>(this.getUserRole());

    constructor(
        private http: HttpClient,
    ) { }

    public get userRole$(): Observable<string> {
        return this.userRoleSubject.asObservable();
    }

    public updateUserRole() {
        this.userRoleSubject.next(this.getUserRole());
    }

    public login(user: any): Observable<any> {
        return this.http.post<any>(`http://localhost:3000/auth/login`, user);
    }

    public logout(): void {
        localStorage.removeItem('token');
        this.userRoleSubject.next('');
    }

    public isAuthenticated(): boolean {
        return !!this.getDecodedToken();
    }

    public getUserRole(): string {
        return this.getDecodedToken() && this.getDecodedToken().role;
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
