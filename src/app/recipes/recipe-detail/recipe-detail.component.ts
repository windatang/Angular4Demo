import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import 'rxjs/add/operator/switchMap';
import { Ingredient } from '../../ingredients/ingredient.model';
import { IngredientService } from '../../ingredients/ingredient.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  // @Input('recipe') recipe: Recipe;
  recipe: Recipe;
  id: number;
  // @Output() addtoShoppingList: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  constructor(private route: ActivatedRoute, private router: Router, private recipesService: RecipesService, private ingredientService: IngredientService) {
    this.recipe = null;
  }

  ngOnInit() {
    // this.recipe = this.route.paramMap.switchMap((params: ParamMap, index: number) => {
    //   return this.recipesService.getRecipe(Number(params.get('id')));
    // });
    // this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipesService.getRecipe(this.id);
    });
  }
  onAddtoShoppingList() {
     this.ingredientService.addIngredients(this.recipe.ingredients);
    // this.addtoShoppingList.emit(this.recipe.ingredients);
  }

}
