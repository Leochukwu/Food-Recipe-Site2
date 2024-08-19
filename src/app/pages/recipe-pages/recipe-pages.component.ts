import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-pages',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './recipe-pages.component.html',
  styleUrl: './recipe-pages.component.scss'
})
export class RecipePagesComponent {

  recipe: any = [];

  constructor(private https: HttpClient){}

  ngOnInit(): void {
    this.https.get('https://dummyjson.com/recipes').subscribe(
      (res: any) => {
        this.recipe = res.recipes
      },
      (err: any) => {}

    )
    
  }

}
