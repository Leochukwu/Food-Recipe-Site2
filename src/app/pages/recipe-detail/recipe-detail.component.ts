import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

  //Variable Declearation 

  recipeDetail: any = {};
  recipeID: any;
  usenow: any;

  constructor(private route: ActivatedRoute, private https: HttpClient){
    this.recipeID = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.https.get('https://dummyjson.com/recipes/' + this.recipeID).subscribe(
      (res: any) =>{
        this.recipeDetail = res;
        this.usenow = res.recipe;
      },
      (err: any) =>{}
    )
    
  }

}
