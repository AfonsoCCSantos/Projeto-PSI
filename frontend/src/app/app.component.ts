import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  user : String | undefined;

  ngOnInit() {
    let logged_user = localStorage.getItem("user_name");
    if (logged_user) this.user = logged_user;
  }
}
