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
    let theresItemsInCar = this.areThereItemsInCart();

    if (!theresItemsInCar) {
      this.games = undefined;
      return;
    }

    this.registerItemsInShoppingCart();
  }

  ngOnChange() {
    let theresItemsInCar = this.areThereItemsInCart();

    if (!theresItemsInCar) {
      this.games = undefined;
      return;
    }

    this.registerItemsInShoppingCart();

  }

  private areThereItemsInCart() : boolean {
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

  removeItemFromShoppingCart(itemId: string) {
    this.shoppingCartService.removeItemFromShoppingCart(itemId);
    this.ngOnChange();
  }

  increaseQuantityOfItem(itemId: string) {
    this.shoppingCartService.increaseQuantityOfItemInShoppingCart(itemId);
    this.itemsInCart[itemId] = this.itemsInCart[itemId] + 1;
  }

  decreaseQuantityOfItem(itemId: string) {
    this.shoppingCartService.decreaseQuantityOfItemInShoppingCart(itemId);
    let decreasedQuantity = this.itemsInCart[itemId] - 1;
    if (decreasedQuantity == 0) {
      this.removeItemFromShoppingCart(itemId);
    }
    else {
      this.itemsInCart[itemId] = decreasedQuantity;
    }
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
