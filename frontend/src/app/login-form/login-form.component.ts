import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.min(4)]),
    password: new FormControl('',[Validators.required]),
  });

  login(){
    if(!this.loginForm.valid) console.log("empty fields")

    let username = this.loginForm.value["username"]
    let password = this.loginForm.value["password"]
  }

}
