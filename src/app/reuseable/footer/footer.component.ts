import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,  HttpClientModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  Limit: any=[];

  //Constructor to allow pulling of data
  constructor(private http: HttpClient){}

  //Initialization function 
  ngOnInit(): void {
    this.getLimit()
    
  }

  //function to get the data


 getLimit(){
   this.http.get('https://dummyjson.com/recipes?limit=6').subscribe(
     (res:any) => {
       this.Limit = res.recipes;
     },
     (err:any) => {}
   )
 }

}
