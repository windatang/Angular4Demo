import {
  Component, OnInit, Input // ,Output, EventEmitter
} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: [ './recipe-item.component.scss' ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor() {
    // this.selected();
  }


  // ngOnChanges() {
  //   console.log(this.recipe);
  // }
  //
  ngOnInit() {
   // console.log("ngOnInit" + this.recipe);
  }

  // selected() {
  //   this.selectRecipe.emit(this.recipe);
  // }

  //
  // ngDoCheck() {
  // }
  //
  // ngAfterContentInit() {
  // }
  //
  // ngAfterContentChecked() {
  // }
  //
  // ngAfterViewInit() {
  // }
  //
  // ngAfterViewChecked() {
  // }
  //
  // ngOnDestroy() {
  // }

}
