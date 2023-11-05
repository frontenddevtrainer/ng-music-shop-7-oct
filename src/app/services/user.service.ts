import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import {
  IUserLoginPayload,
  IUserRegisterPayload,
  IUserRegisterResponsePayload,
} from '../interfaces/User';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = signal<any>(null);

  // private user: BehaviorSubject<any> = new BehaviorSubject(null)
  // user$ = this.user.asObservable();

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
          this.user.set(user);
          this._router.navigateByUrl('/');
        })
      );
  }

  getProfile() {
    const userid = window.localStorage.getItem('userid');
    if (userid) {
      this._http
        .get(`http://localhost:3000/users/${userid}`)
        .subscribe((response) => {
          this.user.set(response);
        });
    }
  }
}
