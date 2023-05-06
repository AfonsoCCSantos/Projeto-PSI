import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  numberOfItems: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  goToShoppingCartView() {
    this.router.navigate(["shoppingcart"]);
  }

  addItemToShoppingCart(itemId: string) {
    let currentItemsInShoppingCart = this.getItemsInShoppingCart();
    if (!currentItemsInShoppingCart) { //There were no items in the shopping cart
      currentItemsInShoppingCart = {[itemId]: 1}
    }
    else { //There were already items in the shopping cart
      currentItemsInShoppingCart[itemId] = 1;
    }
    localStorage.setItem('shoppingCartItems', JSON.stringify(currentItemsInShoppingCart));
  }
  
  increaseQuantityOfItemInShoppingCart(itemId: string) {
    this.updateQuantityOfItemInShoppingCart(itemId, 1);
  }

  decreaseQuantityOfItemInShoppingCart(itemId: string) {
    this.updateQuantityOfItemInShoppingCart(itemId, -1);
  }

  private getItemsInShoppingCart(): any {
    let currentItemsInShoppingCart = null;
    const savedShoppingCartItems = localStorage.getItem('shoppingCartItems');
    if (savedShoppingCartItems != null) {
      currentItemsInShoppingCart = JSON.parse(savedShoppingCartItems);
    }
    return currentItemsInShoppingCart;
  }

  private updateQuantityOfItemInShoppingCart(itemId: string, quantityToUpdate: number) {
    let currentItemsInShoppingCart = this.getItemsInShoppingCart();
    currentItemsInShoppingCart[itemId] = currentItemsInShoppingCart[itemId] + quantityToUpdate;
    localStorage.setItem('shoppingCartItems', JSON.stringify(currentItemsInShoppingCart));
  }
}
