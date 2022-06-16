import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class BasicInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(BYPASS_LOG) === true)
    return next.handle(request)
    else {
      const API_KEY = '123456';
      const auth = 'authKey2'
      let modifiedRequest = request.clone({ 
        setHeaders: { API_KEY,  auth},
        // headers: request.headers.append('auth', 'authKey')
      })
      return next.handle(modifiedRequest).pipe(tap(event => {
        console.log("Interceptor event.type = ", event.type);
        if (event.type == HttpEventType.Response) {
          console.log("Response");
          console.log(event.body);
          
        }
      }));
    }
  }
}

export const BYPASS_LOG = new HttpContextToken(() => false);
