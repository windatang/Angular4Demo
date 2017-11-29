import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../ingredients/ingredient.model';
import { IngredientService } from '../ingredients/ingredient.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private ingredientService: IngredientService) {
    this.ingredients = this.ingredientService.getIngredients();
  }

  ngOnInit() {
    this.subscription = this.ingredientService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
    // console.log(ingredientService.getIngredients());
  }

  onSubmit( ingredient: Ingredient) {
    this.ingredientService.addIngredient(ingredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
