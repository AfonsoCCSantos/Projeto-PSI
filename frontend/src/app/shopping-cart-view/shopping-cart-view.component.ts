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

  games : Item[] | undefined;
  totalPrice = 0;
  itemsInCart : any;

  constructor(private itemService : ItemService, private shoppingCartService : ShoppingCartService) {}

  ngOnInit() {
    /*So para testar*/
    this.shoppingCartService.removeItemFromShoppingCart("644bf9d023ef3a462196c92d");
    // this.shoppingCartService.addItemToShoppingCart("644bf9d023ef3a462196c92d");
    // this.shoppingCartService.addItemToShoppingCart("644c01db032b9210a50a566c");
    // this.shoppingCartService.addItemToShoppingCart("64553a140e9cb42cbda729d9");
    /*              */

    let theresItemsInCar = this.isThereItemsInCart();

    if (!theresItemsInCar) {
      this.games = undefined;
      return;
    }

    this.registerItemsInShoppingCart();
    console.log(this.games)


  }

  ngOnChange() {
    let theresItemsInCar = this.isThereItemsInCart();

    if (!theresItemsInCar) {
      this.games = undefined;
      return;
    }

    this.registerItemsInShoppingCart();

  }

  private isThereItemsInCart() : boolean {
    let shoppingCartItems = localStorage.getItem('shoppingCartItems');

    if (shoppingCartItems == null) {
      return false;
    }

    this.itemsInCart = JSON.parse(shoppingCartItems);

    if (this.itemsInCart) {
      let items_ids = Object.keys(this.itemsInCart);
      if (items_ids.length == 0) {
        return false;
      }
    }

    return true;
  }

  private registerItemsInShoppingCart() {
    this.games = []
    if (this.itemsInCart) {
      let items_ids = Object.keys(this.itemsInCart);

      for(let item of items_ids) {
        this.itemService.getItem(item).subscribe(currItem =>  {
          if (this.games) {
            this.games.push(currItem);
            this.totalPrice += Number(currItem.price);
          }
        });
      }
    }
  }

}
