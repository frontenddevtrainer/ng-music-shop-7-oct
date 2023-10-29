import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ms-register-user-screen',
  templateUrl: './register-user-screen.component.html',
  styleUrls: ['./register-user-screen.component.scss'],
})
export class RegisterUserScreenComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _user: UserService) {}

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      email: [''],
      firstname: [''],
      lastname: [''],
      password: [''],
      confirmPassword: [''],
      dob: [''],
      favSingers: this._fb.array([]),
    });

    this.addSinger();
  }

  addSinger() {
    (this.registerForm.controls['favSingers'] as FormArray).push(
      this._fb.group({
        name: [''],
        rating: [''],
      })
    );
  }

  registerUser() {
    this._user.register(this.registerForm.value).subscribe();
  }

  get favSingers() {
    return this.registerForm.controls['favSingers'] as FormArray;
  }
}
