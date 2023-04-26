import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private user_service : UserService,private router: Router) {
  }

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.min(4)]),
    password: new FormControl('',[Validators.required]),
  });

  login(){
    if(!this.loginForm.valid) console.log("empty fields")

    let username = this.loginForm.value["username"]!
    let password = this.loginForm.value["password"]
    let user! : User;
    this.user_service.getUserByName(username).subscribe(u =>{
      user = u;
    });
    if(user.password == password){
      localStorage.removeItem("user_name");// This makes the user log in always, removing this and add to log out??
      localStorage.setItem("user_name",user.user_name);
      this.router.navigate(["dashboard"]);
    }
  }

}
