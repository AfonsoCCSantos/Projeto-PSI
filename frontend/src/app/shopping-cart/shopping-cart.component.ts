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

  goToShoppingCartView() {
    this.router.navigate(["shoppingcart"]);
  }
}
