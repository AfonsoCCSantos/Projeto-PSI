import { Component } from '@angular/core';
import {Item} from "../Item";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  games : Item[] | undefined;

  constructor(private itemService : ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.games = items);
  }

}
