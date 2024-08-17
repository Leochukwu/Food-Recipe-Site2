import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  //Owl Carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


   //Array to hold the data
   Recipes: any = [];

   Sort: any=[];


   //Constructor to allow pulling of data
   constructor(private http: HttpClient){}
 
   //Initialization function 
   ngOnInit(): void {
     this.getRecipes()
     this.getSort()
     
   }
 
   //function to get the data
   getRecipes(){
     this.http.get('https://dummyjson.com/recipes').subscribe(
       (res:any) => {
         this.Recipes = res.recipes;
       },
       (err:any) => {}
     )
   }


   getSort(){
    this.http.get('https://dummyjson.com/recipes/meal-type/snack').subscribe(
      (res:any) => {
        this.Sort = res.recipes;
      },
      (err:any) => {}
    )
  }
 
}
