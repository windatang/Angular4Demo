import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../ingredients/ingredient.model';

@Component({
  selector: 'app-shopping-list-item',
  styleUrls: ['./shopping-list-item.component.scss'],
  // styles: ''
  templateUrl: './shopping-list-item.component.html'
  // template : ''
})

export class ShoppingListItemComponent implements OnInit {
  @Input() ingredient: Ingredient;
  constructor() {
  }
  ngOnInit() {
    console.log(this.ingredient);
  }
}
