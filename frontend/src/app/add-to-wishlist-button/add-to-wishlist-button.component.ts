import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-to-wishlist-button',
  templateUrl: './add-to-wishlist-button.component.html',
  styleUrls: ['./add-to-wishlist-button.component.css']
})
export class AddToWishlistButtonComponent {
  constructor(
    private route: ActivatedRoute,
  ) {}
  add_item_to_wish_list(){
    let item_id = this.route.snapshot.paramMap.get("id")
    console.log(item_id)

  }
}
