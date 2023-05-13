import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Item } from '../Item';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

    @Input() item?: Item;
    item_languages: string = "";
    video?: SafeResourceUrl;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private itemService: ItemService,
        private shoppingCartService : ShoppingCartService,
        private sanitizer: DomSanitizer
        ) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.params;
        
        this.route.params.subscribe(routeParams => {
            this.item_languages = "";
            this.video = "";
            this.getItem();
        });
    }

    getItem(): void {
        let id = this.route.snapshot.paramMap.get('id');

        if (!id)
            id = '';

        this.itemService.getItem(id)
            .subscribe(item => {
                this.item = item;
                
                for (let i = 0; i < this.item.languages.length; i++) {
                    if(i == this.item.languages.length - 1)
                        this.item_languages += this.item.languages[i];
                    else
                    this.item_languages += this.item.languages[i] + ", ";
                }

                if(this.item.video_link)
                    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.item.video_link);
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
