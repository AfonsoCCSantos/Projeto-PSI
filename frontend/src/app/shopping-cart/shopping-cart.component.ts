import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  numberOfItems: number = 0;
  quantityIncreasedSubscription: Subscription;
  quantityDecreasedSubscription: Subscription;

  constructor(private router: Router, private shoppingCartService: ShoppingCartService) {
    this.quantityIncreasedSubscription = Subscription.EMPTY;
    this.quantityDecreasedSubscription = Subscription.EMPTY;
  }

  goToShoppingCartView() {
    this.router.navigate(["shoppingcart"]);
  }

  ngOnInit() {
    this.quantityIncreasedSubscription = this.shoppingCartService.quantityIncreased.subscribe(() => {
      this.numberOfItems++;
    });
    this.quantityDecreasedSubscription = this.shoppingCartService.quantityDecreased.subscribe(() => {
      this.numberOfItems--;
    });
  }
}
