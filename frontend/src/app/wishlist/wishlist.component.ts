import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";
import {ItemService} from "../item.service";
import {Item} from "../Item";
import { ShoppingCartService } from '../shopping-cart.service';




@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private itemService: ItemService,
    private shoppingCartService: ShoppingCartService
  ) {}

  user: User | undefined;
  wishlist: Item [] = [];

  ngOnInit(): void {
    const routeParams = this.route.snapshot.params;
    this.route.params.subscribe(routeParams => {
      this.getUser();
    });

  }

  getUser(): void {
    const user_name = String(this.route.snapshot.paramMap.get('userName'));
    this.userService.getUserByName(user_name).subscribe(user => {this.user = user;
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

  addItemToCart(itemId: string) {
    this.shoppingCartService.addItemToShoppingCart(itemId);
    console.log(localStorage.getItem('shoppingCartItems'))
  }

}
