import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

    quantityIncreased: EventEmitter<void> = new EventEmitter();
    quantityDecreased: EventEmitter<void> = new EventEmitter();

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
    }

    increaseQuantityOfItemInShoppingCart(itemId: string) {
        this.updateQuantityOfItemInShoppingCart(itemId, 1);
        this.quantityIncreased.emit();
    }

    decreaseQuantityOfItemInShoppingCart(itemId: string) {
        this.updateQuantityOfItemInShoppingCart(itemId, -1);
        this.quantityDecreased.emit();
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
