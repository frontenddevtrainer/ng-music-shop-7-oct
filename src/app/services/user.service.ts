import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IUserLoginPayload,
  IUserRegisterPayload,
  IUserRegisterResponsePayload,
} from '../interfaces/User';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient, private _router: Router) {}

  register(user: IUserRegisterPayload) {
    const { confirmPassword, ...rest } = user;
    return this._http
      .post<IUserRegisterResponsePayload>(
        'http://localhost:3000/register',
        rest
      )
      .pipe(
        tap((response) => {
          const { accessToken } = response;
          window.localStorage.setItem('access-token', accessToken);
          // this._router.navigate(["/"])
          this._router.navigateByUrl('/');
        })
      );
  }

  login(user: IUserLoginPayload) {
    return this._http
      .post<IUserRegisterResponsePayload>('http://localhost:3000/login', user)
      .pipe(
        tap((response) => {
          const { accessToken, user } = response;
          window.localStorage.setItem('access-token', accessToken);
          window.localStorage.setItem('userid', `${user.id}`);
          this._router.navigateByUrl('/');
        })
      );
  }

  getProfile() {
    const userid = window.localStorage.getItem('userid');
    if (userid) {
      this._http.get(`http://localhost:3000/users/${userid}`).subscribe();
    }
  }
}
