import {Component, OnInit} from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import {RestaurantService} from '../../../../services/restaurant.service';
import {CustomerService} from '../../../../services/customer.service';
import {Restaurant} from '../../../../models/restaurant';


declare var JQuery: any;
declare var $: any;

@Component({
    selector: 'admin-list',
    templateUrl: './list.component.html',
    providers: [
        RestaurantService,
        CustomerService
    ]
})
export class ListComponent implements OnInit{
    public title:string;
    public numbers = new Array(15);
    public restaurants:Restaurant[];
    public token;
    public search;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _restaurantService: RestaurantService,
        private _customerService: CustomerService

    ) {
        this.title = 'Restaurant List';
        this.token = this._customerService.getToken();
    }
    ngOnInit(){
        this.getRestaurants();
    }

    getRestaurants(){
        this._restaurantService.getRestaurants().subscribe(
            response => {
                if (!response) {

                } else {
                    this.restaurants = response
                }
            },
            error => {
                console.log(<any>error)
            }
        )
    }

    deleteRestaurant(id){
        this._restaurantService.deleteRestaurant(this.token, id).subscribe(
            response => {
                if(!response){
                    alert(response)
                }else{
                    this.getRestaurants();
                }
            },
            error => {
                alert(error)
            }
        )
    }
}
