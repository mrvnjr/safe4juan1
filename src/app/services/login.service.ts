import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.server_link

  constructor(
     private http: HttpClient
  ) { }

  public login(email_address: string, password: string): Observable<any> {
    return this.http.post<any>("http://localhost:6060/api/auth/login", {
      email_address: email_address,
      password: password,
    }).pipe(
      catchError(this.handleError)
    );
  }

  public test(): Observable<any> {
    return this.http.get<any>("https://ghibliapi.herokuapp.com/films").pipe(
      catchError(this.handleError)
    );
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
