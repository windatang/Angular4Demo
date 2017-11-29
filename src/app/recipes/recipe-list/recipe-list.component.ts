import {
  Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewInit, AfterViewChecked, Output, EventEmitter, HostListener, Input
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs/Subscription';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [ './recipe-list.component.scss' ]
})
export class RecipeListComponent implements OnInit, OnChanges, OnDestroy,
  DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  /* // customer Event
  @Output('select')
  selectRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  */
  @Input() recipes: Array<Recipe>;
  subscription: Subscription;
  constructor(private recipeService: RecipesService) {
    console.log('Called once, when Component called. Number of recipes: ' + this.recipes);
    // console.log('Only do once ');
  }




  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChange
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );

    console.log('Called once, after the first ngOnChanges(). Number of recipes: ' + this.recipes.length);
    // console.log(this.recipe);
  }

  ngOnChanges() {
    console.log('Called before ngOnInit() and whenever one or more data-bound input properties change. Number of recipes: '
      + this.recipes.length);
  }

  ngDoCheck() {
    console.log('Called during every change detection run, immediately after ngOnChanges() and ngOnInit(). Number of recipes: '
      + this.recipes.length);
  }

  ngAfterContentInit() {
    console.log('Called once after the first ngDoCheck(). Number of recipes: ' + this.recipes.length);
  }

  ngAfterContentChecked() {
    console.log('Called after the ngAfterContentInit() and every subsequent ngDoCheck(). Number of recipes: ' + this.recipes.length);
  }

  ngAfterViewInit() {
    console.log('Called once after the first ngAfterContentChecked(). Number of recipes: ' + this.recipes.length);
  }

  ngAfterViewChecked() {
    console.log('Called after the ngAfterViewInit and every subsequent ngAfterContentChecked(). Number of recipes: ' + this.recipes.length);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Called just before Angular destroys the directive/component.');
  }

}
