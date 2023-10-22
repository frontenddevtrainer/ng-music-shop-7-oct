import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { PasswordValidator } from 'src/app/validators/password';

@Component({
  selector: 'ms-register-user-screen',
  templateUrl: './register-user-screen.component.html',
  styleUrls: ['./register-user-screen.component.scss'],
})
export class RegisterUserScreenComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _user: UserService) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), PasswordValidator()],
      ],
      confirmPassword: ['', [Validators.required]],
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

  registerUser() {
    this._user.register(this.form.value).subscribe()
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
