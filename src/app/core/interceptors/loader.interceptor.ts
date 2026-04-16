import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

/**
 * Loader Interceptor
 * Automatically handles showing and hiding a global loading spinner during HTTP requests.
 */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  // Inject your loader service here
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Show Loader for:', request.url);
    return next.handle(request).pipe(
      finalize(() => {
        console.log('Hide Loader for:', request.url);
      })
    );
  }
}
