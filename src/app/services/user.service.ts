import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
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
    return this._http.post<IUserRegisterResponsePayload>(
      'http://localhost:3000/register',
      rest
    );
  }

  getProfile() {
    return this._http.get('http://localhost:3000/profile/1');
  }
}
