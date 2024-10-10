import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/pages/home/home.component';
import { FoodPageComponent } from './componants/pages/food-page/food-page.component';
import { CartPageComponent } from './componants/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './componants/pages/login-page/login-page.component';
import { RegisterPageComponent } from './componants/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './componants/pages/checkout-page/checkout-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'serch/:serchTerm',
    component: HomeComponent,
  },
  {
    path: 'food/:id',
    component: FoodPageComponent,
  },
  {
    path: 'tag/:tag',
    component: HomeComponent,
  },
  {
    path: 'cart-page',
    component: CartPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
