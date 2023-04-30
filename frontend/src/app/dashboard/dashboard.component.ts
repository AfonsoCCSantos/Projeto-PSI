import { Component } from '@angular/core';

import { ItemService } from "../item.service";
import {Item} from "../Item";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private itemService : ItemService) {}

  games : Item[] | undefined;

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.games = items);
  }



}
