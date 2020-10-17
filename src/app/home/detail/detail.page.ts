import { Component, OnInit } from '@angular/core';
import {Item} from "../item.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemsService} from "../items.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedItem: Item;
  descriptionKey: {};
  descriptionValue: {};
  descriptionUnitName: {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log("init")
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('itemId')){ return; }
      const itemId = paramMap.get('itemId');
      this.loadedItem = this.itemsService.getItem(itemId);
      this.descriptionKey = this.itemsService.getDescriptionKey(this.loadedItem.type);
      this.descriptionValue = this.loadedItem.description;
      this.descriptionUnitName = this.itemsService.getDescriptionUnitName(this.loadedItem.type);
    });
  }
}
