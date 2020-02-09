import { Injectable } from '@angular/core';
import { Inicio } from '../models/inicio';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'https://sandbox.wavesreport.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  currentUser = {};

  constructor( 
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(user: Inicio): Observable<any> {
    let api = `${this.endpoint}ssadsa`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  login(user: Inicio) {
    return this.http.post<any>(`${this.endpoint}/api/ns/login`, user)
      .subscribe((res: any) => {
        console.log(res);
        //localStorage.setItem('access_token', res.token)
        //this.getUserProfile(res._id).subscribe((res) => {
         // this.currentUser = res;
         // this.router.navigate(['user-profile/' + res.msg._id]);
       // })
      })
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

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}