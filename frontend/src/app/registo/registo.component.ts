import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { ValidatePassword } from '../validators/passwordValidator';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent {
  
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
    console.log(this.registrationForm.valid);
    this.registrationForm.reset();
  }
}