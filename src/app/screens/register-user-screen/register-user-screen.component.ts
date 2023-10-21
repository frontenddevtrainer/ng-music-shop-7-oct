import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ms-register-user-screen',
  templateUrl: './register-user-screen.component.html',
  styleUrls: ['./register-user-screen.component.scss'],
})
export class RegisterUserScreenComponent {
  constructor(private _fb: FormBuilder) {}


  // POST /api/register 
  /*
    {
      email: string,
      firstName: string,
      lastName: string,
      dob: Timestamp,
      password: string
    }
  */

  form: FormGroup = this._fb.group({
    email: [null],
    firstname: [null],
    lastname: [null],
    dob: [null],
    password: [null],
    confirmPassword: [null],
  });
}
