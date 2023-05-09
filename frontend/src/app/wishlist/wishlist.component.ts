import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";




@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,

  ) {}

  user: User | undefined;

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const user_name = String(this.route.snapshot.paramMap.get('userName'));
    this.userService.getUserByName(user_name)
      .subscribe(user => this.user = user);
  }


}
