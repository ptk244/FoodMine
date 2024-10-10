import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food: any;

  constructor(private activeRoute:ActivatedRoute,private foodService:FoodService,
     private cartService:CartService, private router:Router) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe({
      next:(params)=>{
        if(params.id){
         this.foodService.getFoodById(params.id).subscribe({
          next:(serverFood)=>{
            this.food=serverFood;
          }
         });
        }
      }
    })
  }


  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
