import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;

  constructor(private cartService:CartService) {
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart=cart;
    })
   }

  ngOnInit(): void {

  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuentity(cartItem:CartItem,quentityInString:string){
    const quentity=parseInt(quentityInString);
    this.cartService.changeQuentity(cartItem.food.id,quentity);
  }

}
