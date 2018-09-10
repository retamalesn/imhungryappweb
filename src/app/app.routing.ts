import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {HomeComponent} from './components/general/home/home.component';
import {ReviewComponent} from './components/general/reviews/review/review.component';
import {MealsComponent} from './components/general/meals/meal/meal.component';
import {MealDetailComponent} from './components/general/meals/meal-detail/meal-detail.component';
import {RestaurantComponent} from './components/general/restaurants/restaurant/restaurant.component';
import {RestaurantDetailComponent} from './components/general/restaurants/restaurant-detail/restaurant-detail.component';
import {CustomerComponent} from './components/general/customers/customer/customer.component';
import {OrderComponent} from './components/general/orders/order/order.component';
import {RegisterComponent} from './components/general/register/register.component';
import {LoginComponent} from './components/general/login/login.component';
import {CustomerEditComponent} from './components/general/customers/customer-edit/customer-edit.component';

const appRoutes: Routes = [
    
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'meals', component: MealsComponent},
    {path: 'meal/:id', component: MealDetailComponent},
    {path: 'restaurants', component: RestaurantComponent},
    {path: 'restaurant/:id', component: RestaurantDetailComponent},
    {path: 'reviews', component: ReviewComponent},
    {path: 'orders', component: OrderComponent},
    {path: 'customers', component: CustomerComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: CustomerEditComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
