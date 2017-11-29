import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ],
  declarations: [
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeOverviewComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
  ]
})
export class RecipesModule { }
