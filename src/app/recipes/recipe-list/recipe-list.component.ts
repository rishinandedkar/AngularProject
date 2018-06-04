import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Sheera", "Sweet in taste, white in color", "https://upload.wikimedia.org/wikipedia/commons/4/43/Shira-ae_%282017-01-17%29.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
