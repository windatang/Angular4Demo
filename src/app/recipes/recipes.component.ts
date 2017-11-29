import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { RecipesService } from './recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Array<Recipe> = [];

  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private router: Router) {
    this.recipes =  this.recipesService.recipes;

  }

  ngOnInit() {
  //   this.selectedRecipe = this.recipes[this.route.snapshot.paramMap.get('id')]; // this.route.paramMap.switchMap(params: ParamMap) {
  //   //   this.recipes[params.get('id')];
  //   // }
  }
  addNewRecipe() {
     this.router.navigate([ 'new'], {relativeTo: this.route});
  }


  /*// customer Event
  handleSelectRecipe(recipe: Recipe) {
     this.selectedRecipe = recipe;
  }
  */

}
