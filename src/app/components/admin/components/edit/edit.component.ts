import {Component, OnInit} from '@angular/core';
import {Route, Router, ActivatedRoute, Params} from '@angular/router';
import {CustomerService} from '../../../../services/customer.service';
import {RestaurantService} from '../../../../services/restaurant.service';
import {Restaurant} from '../../../../models/restaurant';
import {GLOBAL} from '../../../../constants/global';


@Component({
    selector: 'admin-edit',
    templateUrl: '../add/add.component.html',
    providers: [
        CustomerService,
        RestaurantService
    ]
})
export class EditComponent implements OnInit {

    public title: string;
    public restaurant: Restaurant;
    public identity;
    public token;
    public url: string
    public status;
    public is_edit;


    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _customerService: CustomerService,
        private _restaurantService: RestaurantService
    ) {
        this.title = 'Edit';
        this.restaurant = new Restaurant('', '', '', '', '', '', null, null, null, 0);
        this.identity = this._customerService.getIdentity();
        this.token = this._customerService.getToken();
        this.url = GLOBAL.url;
        this.is_edit = true;
    }

    ngOnInit() {
        console.log("Restaurant Edited!")
        this.getRestaurant();
    }

    onSubmit() {
        this._restaurantService.editRestaurant(this.token, this.restaurant.id, this.restaurant).subscribe(
            response => {
                if (!response) {
                    this.status = 'error';
                } else {
                    this.status = 'success';
                    this.restaurant = response;
                    this._router.navigate(['/admin-panel/list']);
                }
            }, error => {
                var errorMsg = <any>error;
                if (errorMsg != null) {
                    this.status = 'error';
                }
            });

    }

    getRestaurant() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._restaurantService.getRestaurant(id).subscribe(
                response => {
                    if (!response) {
                        this._router.navigate(['/']);
                    } else {
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

    public filesToUpload: Array<File>;
    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
