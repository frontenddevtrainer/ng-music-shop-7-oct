import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password';

@Component({
  selector: 'ms-register-user-screen',
  templateUrl: './register-user-screen.component.html',
  styleUrls: ['./register-user-screen.component.scss'],
})
export class RegisterUserScreenComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  form!: FormGroup;

  // POST /api/register
  /*
    {
      email: string,
      firstName: string,
      lastName: string,
      dob: Timestamp,
      password: string,
      favSingers : ["abc", "def"]
    }
  */

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      email: ['abc@def.com', [Validators.required, Validators.email]],
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      password: [
        null,
        [Validators.required, Validators.minLength(8), PasswordValidator()],
      ],
      confirmPassword: [null, [Validators.required]],
      favSingers: this._fb.array([]),
    });

    this.addSinger();
  }

  addSinger() {
    (this.form.controls['favSingers'] as FormArray).push(
      this._fb.group({
        name: [null, [Validators.required]],
        rating: [null, [Validators.max(5), Validators.min(1)]],
      })
    );
  }

  get favSingers() {
    return this.form.controls['favSingers'] as FormArray;
  }

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
