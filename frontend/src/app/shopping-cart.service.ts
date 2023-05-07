import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

    quantityUpdated: EventEmitter<number> = new EventEmitter();

    constructor() { }

    addItemToShoppingCart(itemId: string) {
        let currentItemsInShoppingCart = this.getItemsInShoppingCart();
        if (!currentItemsInShoppingCart) { //There were no items in the shopping cart
            currentItemsInShoppingCart = {[itemId]: 1}
        }
        else { //There were already items in the shopping cart
            currentItemsInShoppingCart[itemId] = 1;
        }
        localStorage.setItem('shoppingCartItems', JSON.stringify(currentItemsInShoppingCart));
        this.quantityUpdated.emit(1);
    }

    removeItemFromShoppingCart(itemId: string) {
        let currentItemsInShoppingCart = this.getItemsInShoppingCart();
        let numOfItems = currentItemsInShoppingCart[itemId];
        delete currentItemsInShoppingCart.itemId;
        this.quantityUpdated.emit(-numOfItems);
    }

    increaseQuantityOfItemInShoppingCart(itemId: string) {
        this.updateQuantityOfItemInShoppingCart(itemId, 1);
        this.quantityUpdated.emit(1);
    }

    decreaseQuantityOfItemInShoppingCart(itemId: string) {
        this.updateQuantityOfItemInShoppingCart(itemId, -1);
        this.quantityUpdated.emit(-1);
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