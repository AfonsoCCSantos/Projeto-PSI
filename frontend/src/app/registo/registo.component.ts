import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { ValidatePasswordNumber, ValidatePasswordLowerCase, ValidatePasswordUpperCase } from '../validators/passwordValidator';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent {

  constructor(private router : Router) {}

  // @ViewChild('passwordBox') passwordBox!: ElementRef;
  registrationSuccessful: boolean = false;
  registrationFailed: boolean = false;
  errorMessages: string[] = [];
  alreadyTypingPassword: boolean = false;
  
  registrationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("^[a-zA-Z0-9]+$"),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      ValidatePasswordLowerCase,
      ValidatePasswordNumber,
      ValidatePasswordUpperCase
    ]),
  });

  disablePasswordInformation() {
    this.alreadyTypingPassword = true;
  }

  submit() {
    if (this.registrationForm.valid) {
      this.registrationSuccessful = true;
      this.registrationFailed = false;
    }
    else {
      this.registrationFailed = true;
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