import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipes.module';

import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate/navigate.component';



import { RecipesService  } from './recipes/recipes.service';
import { IngredientService } from './ingredients/ingredient.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    // DropdownDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    AuthModule
  ],
  providers: [RecipesService, IngredientService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
