import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

import { ItemService } from "../item.service";
import {Item} from "../Item";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Cetime';

  constructor(private itemService : ItemService, private titleService:Title) {
    this.titleService.setTitle("Welcome to Cetime");
  }

  games : Item[] | undefined;
  
  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.games = items);
  }
}
