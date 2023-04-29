import { Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  user : String | undefined;

  ngOnInit() {
    let logged_user = localStorage.getItem("user_name");
    if (logged_user) this.user = logged_user;
  }
}
