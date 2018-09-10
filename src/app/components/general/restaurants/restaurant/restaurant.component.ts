import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../../../services/restaurant.service';
import {Restaurant} from '../../../../models/restaurant';
import {GLOBAL} from '../../../../constants/global';



@Component({
    selector: 'restaurants',
    templateUrl: './restaurant.component.html',
    providers:[
        RestaurantService
    ]
})
export class RestaurantComponent implements OnInit {
    public title: String;
    public restaurants: Restaurant[];
    public url;

    constructor(
        private _restaurantService: RestaurantService
    ){
        this.title = "Restaurants";
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log("Restaurant Component loaded!")
        this.getRestaurants();
    }

    getRestaurants() {
        this._restaurantService.getRestaurants().subscribe(
            response => {
                if (!response) {
                    console.log("Error to get restaurant")
                } else {
                    this.restaurants = response
                }
            },
            error => {
                console.log(<any>error)
            }
        )
    }
}
