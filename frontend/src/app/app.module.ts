import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/partials/header/header.component';
import { HomeComponent } from './componants/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './componants/partials/search/search.component';
import { FoodPageComponent } from './componants/pages/food-page/food-page.component';
import { TagsComponent } from './componants/partials/tags/tags.component';
import { CartPageComponent } from './componants/pages/cart-page/cart-page.component';
import { TitleComponent } from './componants/partials/title/title.component';
import { NotFoundComponent } from './componants/partials/not-found/not-found.component';
import { LoginPageComponent } from './componants/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './componants/partials/input-container/input-container.component';
import { InputValidationsComponent } from './componants/partials/input-validations/input-validations.component';
import { TexInputComponent } from './componants/partials/tex-input/tex-input.component';
import { DefaultButtonComponent } from './componants/partials/default-button/default-button.component';
import { RegisterPageComponent } from './componants/pages/register-page/register-page.component';
import { LoadingComponent } from './componants/partials/loading/loading.component'
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './componants/pages/checkout-page/checkout-page.component';
import { OrderItemListComponent } from './componants/partials/order-item-list/order-item-list.component';
import { MapComponent } from './componants/partials/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationsComponent,
    TexInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
