import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../ingredients/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shopingList') shopingList: NgForm;
  @Output() onAddIngredient: EventEmitter<Ingredient> = new EventEmitter();

  constructor( ) { }

  ngOnInit() {
    console.log(this.shopingList);
  }
  onSubmit(form: NgForm) {
    console.log(form);
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    this.onAddIngredient.emit(newIngredient);
  }
  onClear() {
    this.shopingList.reset();
  }
  ngOnDestroy() {
    this.shopingList.reset();
  }

}
