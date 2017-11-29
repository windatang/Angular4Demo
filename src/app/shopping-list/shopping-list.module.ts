import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingEditComponent,
  ]
})
export class ShoppingListModule { }
