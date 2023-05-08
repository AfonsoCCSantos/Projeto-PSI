import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";
import {Item} from "../Item";
import {ItemService} from "../item.service";



@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private itemService: ItemService
  ) {}

  user: User | undefined;
  items: [Item] | undefined


  ngOnInit(): void {
    this.getUser();
    this.getItems();
  }

  getUser(): void {
    const user_name = String(this.route.snapshot.paramMap.get('userName'));
    this.userService.getUserByName(user_name)
      .subscribe(user => this.user = user);
  }


  private getItems() {
    // @ts-ignore
    for (let i = 0; i < this.user?.wish_items?.length; i++) {
      // @ts-ignore
      let item = this.itemService.getItem(this.user?.wish_items[i]);
      // @ts-ignore
      this.items?.push(item)
    }
  }
}
