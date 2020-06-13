import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

let jwt_token: string = localStorage.getItem('AuthToken');
const httpOptions = {
  headers: new HttpHeaders(
      { 
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${jwt_token}`
      }
    )
};
const userServerUrl:string = environment.userUrl;
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

getAll() {
return this.http.get<User[]>(userServerUrl + '/users', httpOptions);
}

getById(id: number) {
    return this.http.get(userServerUrl + '/user/' + id, httpOptions);
}

update(user: User) {
    return this.http.put(userServerUrl + '/users/' + user.userId, user, httpOptions);
}

delete(id: number) {
    return this.http.delete(userServerUrl + '/users/' + id, httpOptions);
}
}
