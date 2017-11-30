import { Ingredient } from '../ingredients/ingredient.model';

export class Recipe {
  private _name: string;
  private _description: string;
  private _imagePath: string;
  private _ingredients: Ingredient[];
  constructor (name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this._name = name;
    this._description = description;
    this._imagePath = imagePath;
    this._ingredients = ingredients;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  set ingredients(value: Ingredient[]) {
    this._ingredients = value;
  }

 // setName(name: string) {
  //   this.name = name;
  // }
  // setDescription(description: string) {
  //   this.description = description;
  // }
  // setImagePath(imagePath: string) {
  //   this.imagePath = imagePath;
  // }
  // getRecipe() {
  //   return {
  //     name: this.name,
  //     description: this.description,
  //     imagePath: this.imagePath
  //   };
  // }
}



// export interface Recipe  {
//    name: string,
//    description: string,
//    imagePath: string,
//    ingredients: Ingredient[]
// }
