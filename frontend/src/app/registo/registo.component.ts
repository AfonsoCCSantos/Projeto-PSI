import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

import { ValidatePasswordNumber, ValidatePasswordLowerCase, ValidatePasswordUpperCase } from '../validators/passwordValidator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent {

  registrationSuccessful: boolean = false;
  registrationFailed: boolean = false;
  alreadyTypingPassword: boolean = false;
  usernameAlreadyTaken: boolean = false;
  
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

  constructor(private router : Router, private userService : UserService) {}

  disablePasswordInformation() {
    this.alreadyTypingPassword = true;
    this.usernameAlreadyTaken = false;
  }

  submit() {
    if (this.registrationForm.valid) {
      let succeeded = false;
      const newUser: User = {
        _id: '',
        user_name: this.username.value,
        password: this.password.value,
        image: new ArrayBuffer(0)
      };
      this.userService.registerUser(newUser).subscribe(result => succeeded = result);
      if (succeeded) {
        this.registrationSuccessful = true;
        this.registrationFailed = false;
      }
      else {
        this.usernameAlreadyTaken = true;
      }
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