import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipesService {
  updateRecipeView: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipeChange: Subject<Recipe[]> = new Subject<Recipe[]>();
  recipes: Array<Recipe> = [
    new Recipe('Beef Wellington',
      'This is a very easy recipe that I learned when I was living in England.' +
      'Note that Beef Wellington should always be served with the center slightly pink. Enjoy!',
      'https://www.bbcgoodfood.com/sites/default/' +
      'files/styles/carousel_medium/public/technique_images/beef_wellington_700.jpg?itok=HmD7HSFS',
      []
    ),
    new Recipe('东坡肉',
      '东坡肉说起来还有个小故事呢。 北宋神宗熙宁十年（1077年）秋，黄河决口，七十余日大水未退。' +
      '徐州知州苏轼亲率全城吏民抗洪，终于战胜洪水，并于次年修筑“苏堤”。百姓感谢苏东坡为民造福，' +
      '纷纷杀猪宰羊，担酒携菜送至州府感谢苏公。苏公推辞不掉，将这些肉加工成熟后再回赠百姓。 ' +
      '苏轼曾经作诗说：慢着火，少着水，火候足时他自美。每日起来打一碗，饱得自家君莫管。' ,
      'http://a0.att.hudong.com/70/54/01300000085669120576546898676.jpg',
      []
    ),
  ];
  constructor() { }
  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.updateRecipeView.emit(this.recipes[id]);
    this.recipeChange.next(this.recipes.slice());
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.updateRecipeView.emit(this.recipes[this.recipes.length - 1]);
    // this.updateRecipeView.emit(this.recipes[id]);
  }
  getRecipe (id: number): Recipe {
   return this.recipes[id];
  }
  getRecipes () {
    return this.recipes.slice();
  }
  setRecipes (recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChange.next(this.recipes.slice());
  }
}
