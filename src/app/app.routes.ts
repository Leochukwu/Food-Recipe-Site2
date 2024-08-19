import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { RecipePagesComponent } from './pages/recipe-pages/recipe-pages.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipeDetail/:id', component: RecipeDetailComponent},
    {path: 'recipe-pages', component: RecipePagesComponent}
];
