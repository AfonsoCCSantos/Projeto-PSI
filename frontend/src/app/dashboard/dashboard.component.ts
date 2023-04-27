import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user : String | undefined;

  ngOnInit() {
    let logged_user = localStorage.getItem("user_name");
    if (logged_user) this.user = logged_user;
  }

}
