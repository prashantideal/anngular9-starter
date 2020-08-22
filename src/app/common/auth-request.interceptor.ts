import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthRequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Auth interceptor');

    request = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.authService.getToken())
    });
    //request.headers.set('Authorization', 'Bearer' + this.authService.getToken());
    return next.handle(request);
  }
}
