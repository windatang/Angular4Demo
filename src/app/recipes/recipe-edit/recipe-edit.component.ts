import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Ingredient } from '../../ingredients/ingredient.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  recipeForm: FormGroup;
  editMode = false;
  recipe: Recipe;
  id: number;
  constructor(private route: ActivatedRoute, private router: Router, private recipesService: RecipesService) {
    this.recipe = null;
  }

  ngOnInit() {
    // this.recipe = this.route.paramMap.switchMap((params: ParamMap , index: number) => {
    //   return this.recipesService.getRecipe(Number(params.get('id')));
    // });
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipesService.getRecipe(this.id);
      if (this.recipe == null) {
        this.router.navigate(['/recipes/new']);
        this.editMode = false;
        this.recipe = new Recipe("","","",[]);

        // this.router.navigate([]);
      }else {
        this.editMode = true;
      }
      this.initForm();
    });
  }
  onAddIngredient() {
    const formGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(formGroup);
  }
  private initForm() {
    const recipeIngredients = new FormArray([]);
    if (this.editMode) {
      if (this.recipe.ingredients) {
        this.recipe.ingredients.forEach((ingredient: Ingredient) => {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amout, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        });
      }
    }

    this.recipeForm = new FormGroup({
      name: new  FormControl(this.recipe.name, Validators.required),
      imagePath:  new FormControl(this.recipe.imagePath, Validators.required),
      description: new FormControl(this.recipe.description, Validators.required),
      ingredients: recipeIngredients
    });
  }
  // onAddIngredient() {
  //   (<FormArray>this.recipeForm.get('ingredients')).push(
  //     new FormGroup({
  //       'name': new FormControl(null, Validators.required),
  //       'amount': new FormControl(null, [
  //         Validators.required,
  //         Validators.pattern(/^[1-9]+[0-9]*$/)
  //       ])
  //     })
  //   );
  // }

  onSubmit() {
    // onSubmit(form: HTMLFormElement) {
    console.log(this.recipeForm)

    this.recipesService.updateRecipe(this.id,  this.recipeForm.value);
  }
  onRemoveIndteient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }


}
