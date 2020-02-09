import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Inicio } from './../models/inicio';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
 // https://sandbox.wavesreport.com/social/api/ns/login
  base_path = 'https://sandbox.wavesreport.com/social';
  base_back = 'https://sandbox.wavesreport.com/app_backend';
  constructor(private http: HttpClient,
    public router: Router
    ) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer e08419ca-d7da-4cd3-a58c-e2cc9a3fd2b3'
    })
    }
   httpsegundario ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
   } 
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  register(item): Observable<Inicio> {
    return this.http
      .post<Inicio>(this.base_path+'/api/v1/users', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getuser(): Observable<Inicio> {
    return this.http
    .get<Inicio>(this.base_path+'/api/users')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  login(item): Observable<Inicio> {
    return this.http
      .post<Inicio>(this.base_path+'/api/ns/login', JSON.stringify(item), this.httpsegundario)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  starttoken(uid, username, email): Observable<Inicio> {
    let body = new HttpParams();
    body = body.set('uid', uid);
    body = body.set('username', username);
    body = body.set('email', email);
    return this.http.post<Inicio>(this.base_back +'/users',JSON.stringify(body), this.httpsegundario)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  notificacao(): Observable<Inicio> {
    return this.http
      .get<Inicio>(this.base_path+'/api/notifications')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }





  getToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }


 
  


}
