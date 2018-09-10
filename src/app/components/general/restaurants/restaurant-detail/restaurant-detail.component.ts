
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Route, Router, ActivatedRoute, Params} from '@angular/router';
import {RestaurantService} from '../../../../services/restaurant.service';
import {Restaurant} from '../../../../models/restaurant';
import {GLOBAL} from '../../../../constants/global';



@Component({
    selector: 'restaurant-detail',
    templateUrl: './restaurant-detail.component.html',
    providers: [
        RestaurantService
    ]
})
export class RestaurantDetailComponent implements OnInit,AfterViewInit  {
    
    public restaurant: Restaurant;
    public url: string;
    @ViewChild('gmap') 
    gmap: any;
    public map: google.maps.Map;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _restaurantService: RestaurantService

    ) {
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log("Restaurant detail component loaded");
        this.getRestaurant();
    }

    ngAfterViewInit(){
        console.log("gmapElement:", this.gmap.nativeElement);
    }

    getRestaurant(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._restaurantService.getRestaurant(id).subscribe(
                response => {
                    if(!response){
                        this._router.navigate(['/']);
                    }else{
                        let coordenadas = response.location.split(',');
                        this.setMap(coordenadas, response.name);
                        this.restaurant = response;
                    }
                },
                error => {
                    console.log(<any>error);
                    this._router.navigate(['/']);
                }
            )
        })
    }

    private setMap(coordenadas, markerName){
        var mapProp = {
            center: new google.maps.LatLng(coordenadas[0], coordenadas[1]),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmap.nativeElement, mapProp);
        var marker = new google.maps.Marker({
            position: mapProp.center,
            map: this.map,
            title: markerName
        });
    }
}
