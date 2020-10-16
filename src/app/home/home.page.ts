import { Component } from '@angular/core';
import {Item} from "./item.model";
import {ItemsService} from "./items.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Item[];
  isGrid: boolean = false;
  constructor(
    private itemService: ItemsService,
  ) {}

  ngOnInit() {
    this.items = this.itemService.getAllItems();
    this.items = this.items.filter(item => {
      return item.stock > 0;
    });
  }

  ionViewWillEnter() {
    this.items = this.itemService.getAllItems();
    this.items = this.items.filter(item => {
      return item.stock > 0;
    });
  }

  changeView() {
    this.isGrid = !this.isGrid
  }
}
