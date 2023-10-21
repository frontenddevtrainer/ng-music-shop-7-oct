import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password';

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
    email: [null, [Validators.required, Validators.email]],
    firstname: [null, [Validators.required]],
    lastname: [null, [Validators.required]],
    dob: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(8), PasswordValidator()]],
    confirmPassword: [null, [Validators.required]],
  });

  get controls() {
    return this.form.controls;
  }

  get email() {
    return this.form.controls['email'];
  }

  get firstname() {
    return this.form.controls['firstname'];
  }

  get lastname() {
    return this.form.controls['lastname'];
  }

  get dob() {
    return this.form.controls['dob'];
  }

  get password() {
    return this.form.controls['password'];
  }

  get confirmPassword() {
    return this.form.controls['confirmPassword'];
  }
}
