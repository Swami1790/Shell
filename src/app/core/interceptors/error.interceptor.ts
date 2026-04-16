import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Error Interceptor
 * Catches HTTP errors globally to handle things like 401 Unauthorized or 500 Server Error.
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error globally here (e.g., show notification or redirect)
        console.error('An error occurred:', error);
        return throwError(() => error);
      })
    );
  }
}
