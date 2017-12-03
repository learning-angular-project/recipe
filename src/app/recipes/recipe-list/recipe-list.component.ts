import { Recipe } from '../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Omelette', 'Omelette aux oeuf', 'https://image.afcdn.com/recipe/20140101/26674_w420h344c1cx256cy192.jpg'),
    new Recipe('Omelette2', 'Omelette aux oeuf2', 'https://image.afcdn.com/recipe/20140101/26674_w420h344c1cx256cy192.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
