import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/food';
import {sample_food} from '../../../../data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  foods:Food[]=[]
  constructor(private foodService:FoodService, private activeRoute:ActivatedRoute) {
    let foodsObservable:Observable<Food[]>
    activeRoute.params.subscribe((params)=>{
      if(params.serchTerm){
        foodsObservable=this.foodService.getAllFoodbySerchterm(params.serchTerm); 
        foodsObservable.subscribe((serverFood)=>{
          this.foods=serverFood;
        })
      }
      else if(params.tag){
        foodsObservable=this.foodService.getAllfoodsByTag(params.tag);
        foodsObservable.subscribe((serverFood)=>{
          this.foods=serverFood;
        })
        
      }
      else{
        foodsObservable=foodService.getAll();

        foodsObservable.subscribe((serverFood)=>{
          this.foods=serverFood;
        })
      }
    })
    
   }


  ngOnInit(): void {
    this.foods=sample_food;
  }

}
