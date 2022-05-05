import { ErrorDialogService } from './../error-dialog/error-dialog.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

// const baseUrl = `${environment.apiUrl}/api/kubediag`;
const baseUrl = '/api/kubediag';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(public errorDialogService: ErrorDialogService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      url: `${baseUrl}${request.url}`,
    });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        this.errorDialogService.openDialog(error);
        return throwError(error.message);
      })
    );
  }
}
