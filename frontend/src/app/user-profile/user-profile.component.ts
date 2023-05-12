import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import {Item} from "../Item";
import { ItemService } from '../item.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private itemService: ItemService
  ) {}

  user: User | undefined;
  wishlist: Item [] = [];

   ngOnInit(): void {
     this.getUser();
     const routeParams = this.route.snapshot.params;
     this.route.params.subscribe(routeParams => {
       this.getUser();
     });
   }

  getUser(): void {
    const user_name = String(this.route.snapshot.paramMap.get('userName'));
    this.userService.getUserByName(user_name)
      .subscribe(user => {this.user = user;
        this.getItems();
      });
  }


  private getItems() {
      for (let item_id of this.user?.wish_items!) {
        this.itemService.getItem(String(item_id)).subscribe(item => {
          this.wishlist.push(item);
        })

      }
   }

}
