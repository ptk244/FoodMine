import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   cartQuentity=0;
   user!:User;
  constructor(CartService:CartService, private userService:UserService) {
    CartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuentity=newCart.totalCount
    })

    userService.userObservable.subscribe((newUser)=>{
      this.user=newUser;
      console.log(this.user);
      
    })
   }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.address;
  }

}
