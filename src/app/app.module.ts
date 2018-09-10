import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/general/home/home.component';
import {appRoutingProviders, routing} from './app.routing';

import {Restaurant} from './models/restaurant';
import {MealsComponent} from './components/general/meals/meal/meal.component';
import {MealDetailComponent} from './components/general/meals/meal-detail/meal-detail.component';
import {RestaurantComponent} from './components/general/restaurants/restaurant/restaurant.component';
import {RestaurantDetailComponent} from './components/general/restaurants/restaurant-detail/restaurant-detail.component';
import {ReviewComponent} from './components/general/reviews/review/review.component';
import {CustomerComponent} from './components/general/customers/customer/customer.component';
import {OrderComponent} from './components/general/orders/order/order.component';
import {RegisterComponent} from './components/general/register/register.component';
import {LoginComponent} from './components/general/login/login.component';
import {CustomerService} from './services/customer.service';
import {CustomerEditComponent} from './components/general/customers/customer-edit/customer-edit.component';
import {AdminModule} from './components/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealsComponent,
    MealDetailComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ReviewComponent,
    CustomerComponent,
    OrderComponent,
    RegisterComponent,
    LoginComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AdminModule
  ],
  providers: [
    appRoutingProviders,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  ngOnInit(){
    console.log("Se cargo la app...");
  } 

}
