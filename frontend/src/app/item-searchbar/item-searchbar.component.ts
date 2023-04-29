import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from 'src/app/Item';
import { ItemService } from '../item.service';

import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

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
    showList: boolean = true;

    constructor(
        private itemService : ItemService,
        private elementRef : ElementRef
        ) {}

    ngOnInit(): void {
        this.items$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.itemService.searchItems(term)),
        )
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    @HostListener('document:mousedown', ['$event'])
    onGlobalClick(event: MouseEvent): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            // clicked outside => close dropdown list
            this.showList = false;
        }
        else {
            this.showList = true;
        }
    }
}
