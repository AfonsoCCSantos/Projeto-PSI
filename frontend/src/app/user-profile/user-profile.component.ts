import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  user: User | undefined;

  // ngOnInit(): void {
  //   this.getUser();
  // }

  getUser(): void {
    const user_name = String(this.route.snapshot.paramMap.get('userName'));
    this.userService.getUserByName(user_name)
      .subscribe(user => this.user = user);
  }


}
