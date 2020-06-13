import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { catchError, retry, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
      { 
          'Content-Type': 'application/json'
      }
    )
};
const authServerUrl:string = environment.authUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login (username: string, password: string) {
    let payload = {
      username: username,
      password: password
  }
    return this.http.post<any>(authServerUrl+ '/login', payload, httpOptions).pipe(
      retry(3),
      map(data => {
        if (data.status == 'success') {
          localStorage.setItem('AuthToken', data.authToken);
          localStorage.setItem('username', data.username);                     
      } else {
          //this.alertService.error(data.message);
      }
      }),
      //catchError(err => console.log(err)) 
    );
  }

  register (user: User) {
    return this.http.post<any>(authServerUrl+ '/signup', user, httpOptions);
  }
}
