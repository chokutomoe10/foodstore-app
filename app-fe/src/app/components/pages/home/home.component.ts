import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  // starRating = 3.5;
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    let foodsObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params['searchItem'])
      foodsObservable = this.foodService.getAllBySearchItem(params['searchItem']);
      else if (params['tag'])
      foodsObservable = this.foodService.getAllFoodsByTag(params['tag']);
      else
      foodsObservable = this.foodService.getAll();

      foodsObservable.subscribe((serverFood) => {
        this.foods = serverFood;
      })
    })
  }
  
  ngOnInit(): void {
  }
}
