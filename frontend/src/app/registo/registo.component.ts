import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { ValidatePassword } from '../validators/passwordValidator';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent {

  constructor(private router : Router) {}

  registrationSuccessful: boolean = false;
  
  registrationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("^[a-zA-Z0-9]+$"),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      ValidatePassword
    ]),
  });

  submit() {
    if (this.registrationForm.valid) {
      this.registrationSuccessful = true;
    }
    this.registrationForm.reset();
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }

  get username() {
    return this.registrationForm.get('username') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
}