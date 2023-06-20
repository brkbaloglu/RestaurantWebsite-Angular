import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  foodCategories = [
    {
      id:1,
      foodCategory:"Sandwich",
      foodImg:"../assets/img/s-1.png"
    },
    {
      id:1,
      foodCategory:"Pizza",
      foodImg:"../assets/img/s-2.png"
    },
    {
      id:2,
      foodCategory:"Ice Cream",
      foodImg:"../assets/img/s-3.png"
    },
    {
      id:3,
      foodCategory:"Drinks",
      foodImg:"../assets/img/s-4.png"
    },
    {
      id:5,
      foodCategory:"Desserts",
      foodImg:"../assets/img/s-5.png"
    },
    {
      id:6,
      foodCategory:"Tea",
      foodImg:"../assets/img/s-6.png"
    }
  ]
}
