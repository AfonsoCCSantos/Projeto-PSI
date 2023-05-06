import { Component } from '@angular/core';
import {Item} from "../Item";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent {

  games : Item[] | undefined;

  constructor(private itemService : ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.games = items);
  }

}
