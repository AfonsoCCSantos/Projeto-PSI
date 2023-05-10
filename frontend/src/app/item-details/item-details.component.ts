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

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private itemService: ItemService,
        private shoppingCartService : ShoppingCartService
        ) {}

    ngOnInit(): void {
        this.getItem();
    }

    getItem(): void {
        let id = this.route.snapshot.paramMap.get('id');

        if (!id)
            id = '';

        this.itemService.getItem(id)
            .subscribe(item => {
                this.item = item;
                console.log(item);
            });
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
}
