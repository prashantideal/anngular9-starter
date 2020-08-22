import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { User } from './model/user';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:9015';

  constructor(private http: HttpClient) {}

  login(loginReq: FormData): Observable<any>{
    // return this.http
    //   .post(this.apiUrl + '/login', loginReq,{observe: 'response'});

    if ( loginReq.get('username') === 'admin' && loginReq.get('password') === 'admin'){
      return new Observable<boolean>(observer =>  { this.setSession({ expiresIn : 24 * 60 * 60, id_token: '123'}); observer.next(true);});
    }
    return new Observable<boolean>(observer =>  {observer.error(false); } );
  }

  // setSession(authResult) {
  //   const token = authResult.headers.get('CMS-TOKEN');
  //   const decoded = jwt_decode(token);
  //   console.log(decoded);
  //   const expiresAt = moment().add(decoded['exp'], 'second');
  //   var userInfo = {user:decoded['sub'],token, expires: JSON.stringify(expiresAt.valueOf()), roles: decoded['role']};
  //   localStorage.setItem('userinfo', JSON.stringify(userInfo));
  // }

  setSession(authResult) {
    const expiresAt = moment().add(authResult['expiresIn'], 'second');
    var userInfo = {user: 'prashant', token: '123456', expires: JSON.stringify(expiresAt.valueOf()), roles: ['Admin']};
    localStorage.setItem('userinfo', JSON.stringify(userInfo));
  }

  logout() {
    localStorage.removeItem('userinfo');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const userInfo = this.getUserFromStore();
    if (userInfo){
      const expiration = userInfo.expires;
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
  }

  getToken() {
    const userInfo = this.getUserFromStore();
    if (userInfo){
      return userInfo.token;
    }
  }

  hasRole(role: string) {
    const userInfo = this.getUserFromStore();
    if (userInfo){
      return userInfo.roles.includes(role);
    }
  }

  getUserFromStore(){
    return JSON.parse(localStorage.getItem('userinfo'));
  }
}
