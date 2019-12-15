import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() { }

    public intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let modifiedReq: HttpRequest<any> = req;
        const token = localStorage.getItem('token');

        modifiedReq = token
            ? req.clone({
                headers: req.headers
                    .set('Authorization', 'Bearer ' + token)
                    .set('Content-Type', 'application/json')
            })
            : req.clone({
                headers: req.headers.set('Content-Type', 'application/json')
            });


        return next.handle(modifiedReq);
    }
}
