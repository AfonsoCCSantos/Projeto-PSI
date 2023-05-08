import { Component } from '@angular/core';
import {ItemService} from "../item.service";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent {

  games = new Map();
  totalPrice = 0;

  constructor(private itemService : ItemService, private shoppingCartService : ShoppingCartService) {}

  ngOnInit() {
    /*So para testar*/
    // this.shoppingCartService.addItemToShoppingCart("644bf9d023ef3a462196c92d");
    // this.shoppingCartService.addItemToShoppingCart("644c01db032b9210a50a566c");
    // this.shoppingCartService.addItemToShoppingCart("64553a140e9cb42cbda729d9");
    /*              */

    let items = this.shoppingCartService.getItemsInShoppingCart();
    let mapGames = new Map<string,Number>(Object.entries(items));


    for(let item of mapGames.keys()) {
      this.itemService.getItem(item).subscribe(currItem =>  {
        this.games.set(currItem, mapGames.get(item));
        this.totalPrice += Number(currItem.price);
      });

    }
      console.log(this.games.keys());
  }

}
