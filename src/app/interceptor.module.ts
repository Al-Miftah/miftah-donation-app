import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';
import { Platform } from '@ionic/angular';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(public platform: Platform, private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: this.auth.accessToken ? this.auth.accessToken : '',
        Accept: 'application/json',
      },
    });
    return next.handle(dupReq).pipe(
      catchError((e) => {
        if (e.status === 422) {
          let message = '';
          if (e.error.errors) {
            for (const msg in e.error.errors) {
              if (e.error.errors[msg] && e.error.errors[msg][0]) {
                message += `${e.error.errors[msg][0]} `;
              }
            }
          } else {
            message += e.error.message;
          }
          return throwError({message});
        }
        if (e.error) {
          return throwError(e.error);
        }
        return throwError('Request time out. kindly try again');
      })
    );
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})
export class InterceptorModule {}
