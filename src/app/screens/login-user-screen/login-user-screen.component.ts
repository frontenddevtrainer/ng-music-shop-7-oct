import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ms-login-user-screen',
  templateUrl: './login-user-screen.component.html',
  styleUrls: ['./login-user-screen.component.scss']
})
export class LoginUserScreenComponent {
  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _user: UserService) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: [''],
      password: [''],
    });
  }


  loginUser() {
    this._user.login(this.loginForm.value).subscribe();
  }

}
