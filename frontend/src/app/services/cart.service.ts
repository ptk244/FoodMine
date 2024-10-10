import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/food';
import { CartItem } from '../shared/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart =this.getCartFromLocalStorage();
  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart)
  constructor() { }

  addToCart(food:Food){
    // let cartItem=this.cart.items.find((item: { food: { id: string; }; })=>item.food.id===food.id)
    let cartItem=this.cart.items.find((item:any)=>item.food.id===food.id);
    if(cartItem)
      return;

    this.cart.items.push(new CartItem(food));
    this.setCartTolocalStorage();
  }

  removeFromCart(foodId:string){
    this.cart.items=this.cart.items.filter((item:any)=>item.food.id!=foodId);
    this.setCartTolocalStorage();
  }

  changeQuentity(foodId:string, quentity:number){
    let cartItem=this.cart.items.find((item:any)=>item.food.id===foodId)
    if(!cartItem)
      return;
    cartItem.quentity=quentity;
    cartItem.price=quentity*cartItem.food.price;
    this.setCartTolocalStorage();
  }

  clearCart(){
    this.cart=new Cart();
    this.setCartTolocalStorage();
  }

  getCartObservable(): Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart():Cart{
    return this.cartSubject.value;
  }

  private setCartTolocalStorage(){
    this.cart.totalprice=this.cart.items.reduce((prevSum: any,currentitem: { price: any; })=>prevSum+currentitem.price,0)
    this.cart.totalCount=this.cart.items.reduce((prevSum: any,currentitem: { quentity: any; })=>prevSum+currentitem.quentity,0)
    const cartJson=JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);

    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(){
    const cartJson=localStorage.getItem('Cart')
    return cartJson? JSON.parse(cartJson):new Cart();
  }
}
