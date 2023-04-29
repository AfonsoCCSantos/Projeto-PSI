import { Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  user : string | undefined;

  ngOnInit() {
    let logged_user = localStorage.getItem("user_name");
    if (logged_user){
      this.user = logged_user;
      return;
    }
    logged_user = sessionStorage.getItem("user_name");
    if (logged_user) {
      this.user = logged_user;
    }
  }

  logOutUser() {
    localStorage.removeItem("user_name");
    sessionStorage.removeItem("user_name");
  }



}
