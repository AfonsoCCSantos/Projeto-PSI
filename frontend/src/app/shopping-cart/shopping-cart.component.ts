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
  quantityUpdatedSubscription: Subscription;

  constructor(private router: Router, private shoppingCartService: ShoppingCartService) {
    this.quantityUpdatedSubscription = Subscription.EMPTY;
  }

  goToShoppingCartView() {
    this.router.navigate(["shoppingcart"]);
  }

  ngOnInit() {
    this.quantityUpdatedSubscription = this.shoppingCartService.quantityUpdated.subscribe((qt: number) => {
      this.numberOfItems += qt;
    });
    //Initialise the number of items with the number of items on local storage
    
  }

  ngOnDestroy() {
    this.quantityUpdatedSubscription.unsubscribe();
  }
}
