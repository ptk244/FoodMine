import { Food } from "../food";

export class CartItem{
    constructor(public food: any){
        // this.food=food;
    }
    // food!:Food;
    quentity:number=1;
    price:number=this.food.price;
    

    
    
   

   
}