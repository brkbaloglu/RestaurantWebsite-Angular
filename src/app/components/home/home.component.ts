import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private categories:CategoriesService){
    
  }

  foodCategory:any;
  ngOnInit():void{
    this.foodCategory = this.categories.foodCategories;
  }

}
