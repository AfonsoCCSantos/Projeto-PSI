import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from 'src/Item';
import { ItemService } from '../item.service';

import {
    debounceTime, distinctUntilChanged, switchMap
  } from 'rxjs/operators';

@Component({
  selector: 'app-item-searchbar',
  templateUrl: './item-searchbar.component.html',
  styleUrls: ['./item-searchbar.component.css']
})
export class ItemSearchbarComponent implements OnInit {

    items$!: Observable<Item[]>;
    private searchTerms = new Subject<string>();

    constructor(private itemService : ItemService) {}

    ngOnInit(): void {
        this.items$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.itemService.searchHeroes(term)),
        )
    }

    search(term: string): void {
        this.searchTerms.next(term);
    } 
}
