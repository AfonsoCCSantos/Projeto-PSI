import { Component } from '@angular/core';
import {ItemService} from "../item.service";
import {ShoppingCartService} from "../shopping-cart.service";
import {Item} from "../Item";

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent {

  games : Item[] = [];
  totalPrice = 0;
  itemsInCart : any;

  constructor(private itemService : ItemService, private shoppingCartService : ShoppingCartService) {}

  ngOnInit() {
    /*So para testar*/
    // this.shoppingCartService.removeItemFromShoppingCart("644c01db032b9210a50a566c");
    // this.shoppingCartService.addItemToShoppingCart("644bf9d023ef3a462196c92d");
    // this.shoppingCartService.addItemToShoppingCart("644c01db032b9210a50a566c");
    // this.shoppingCartService.addItemToShoppingCart("64553a140e9cb42cbda729d9");
    /*              */

    let shoppingCartItems = localStorage.getItem('shoppingCartItems');
    if (shoppingCartItems == null) return;

    this.itemsInCart = JSON.parse(shoppingCartItems);
    if (this.itemsInCart) {
      let items_ids = Object.keys(this.itemsInCart);

      for(let item of items_ids) {
        this.itemService.getItem(item).subscribe(currItem =>  {
          this.games.push(currItem);
          this.totalPrice += Number(currItem.price);
        });

      }
    }

  }

}
