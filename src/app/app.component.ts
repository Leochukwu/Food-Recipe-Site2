import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./reuseable/header/header.component";
import { FooterComponent } from "./reuseable/footer/footer.component";
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from "./pages/recipe-detail/recipe-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RecipeDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-new-angular-project';
}
