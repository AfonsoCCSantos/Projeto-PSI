import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-add-to-wishlist-button',
  templateUrl: './add-to-wishlist-button.component.html',
  styleUrls: ['./add-to-wishlist-button.component.css']
})
export class AddToWishlistButtonComponent {
  constructor(
    private user_service: UserService,
    private route: ActivatedRoute,
  ) {}
  add_item_to_wish_list(){
    let item_id = this.route.snapshot.paramMap.get("id")
    let username = localStorage.getItem("user_name")
    if(!username){
      username = sessionStorage.getItem("user_name")
    }
    this.user_service.add_item_to_wishlist(username!,item_id!)
      .subscribe(answer =>{
        if(answer.succeeded){
          //Show window with sucess msg
        }
        else{
          //Show window with failure msg
        }
      })


  }
}
