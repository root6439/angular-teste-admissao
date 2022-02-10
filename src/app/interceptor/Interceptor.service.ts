import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status != 401) {
          return null;
        }

        let params: HttpParams = new HttpParams();
        params = params.append('token', localStorage.getItem('token'));
        this.http
          .get(`${environment.serverUrl}/usuario/renovar-ticket`, {
            params: params,
          })
          .subscribe((resp) => {
            console.log(resp);

            if (!resp) {
              localStorage.removeItem('token');
              this.router.navigate(['/login']);
            }
          });

        return throwError(error);
      })
    );
  }
}
