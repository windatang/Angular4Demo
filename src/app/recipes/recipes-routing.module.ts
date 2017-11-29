import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', redirectTo: 'recipe-overview', pathMatch: 'full'},
    {path: 'recipe-overview', component: RecipeOverviewComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
  ]},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class RecipeRoutingModule { }
