import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../Item';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item?: Item;
  user : string | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService,
    private shoppingCartService : ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.getItem();
    let logged_user = localStorage.getItem("user_name");
    if (logged_user){
      this.user = logged_user;
      return;
    }
    logged_user = sessionStorage.getItem("user_name");
    if (logged_user) {
      this.user = logged_user;
    }
  }

  getItem(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if (!id)
      id = '';

    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

  addItemToShoppingCart() {
    console.log(this.item);
    if (this.item) {
      this.shoppingCartService.addItemToShoppingCart(this.item._id);
    }
  }

  showMessage($event :any){
    let information_window = document.getElementById("information-window")!;
    let message = document.getElementById("message")!;
    information_window.classList.add("active");
    message.textContent = $event.msg;
  }

  hideWindow(){
    let information_window = document.getElementById("information-window")!;
    information_window.classList.remove("active");
  }

  goToUsersWishlist(){

  }
}
