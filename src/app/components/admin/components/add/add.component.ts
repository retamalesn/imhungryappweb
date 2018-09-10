import {Component, OnInit} from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../../../services/customer.service';
import {RestaurantService} from '../../../../services/restaurant.service';
import {Restaurant} from '../../../../models/restaurant';
import {GLOBAL} from '../../../../constants/global';


@Component({
    selector: 'admin-add',
    templateUrl: './add.component.html',
    providers:[
        CustomerService,
        RestaurantService
    ]
})
export class AddComponent implements OnInit{
    
    public title : string;
    public restaurant: Restaurant;
    public identity;
    public token;
    public url:string
    public status;


    constructor(
        private _router:Router,
        private _route:ActivatedRoute,
        private _customerService:CustomerService,
        private _restaurantService:RestaurantService
    ){
        this.title = 'Add';
        this.restaurant = new Restaurant('','','','','','',null,null,null,0);
        this.identity = this._customerService.getIdentity();
        this.token = this._customerService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log("Restaurant added!")
    }

    onSubmit(){
        this._restaurantService.addRestaurant(this.token, this.restaurant).subscribe(
            response => {
                if(!response){
                    this.status = 'error';
                }else{
                    this.status = 'success';
                    this.restaurant = response;
                    this._router.navigate(['/admin-panel/list']);
                }
            },error =>{
                var errorMsg = <any>error;
                if(errorMsg != null){
                    this.status = 'error';
                }
            });

    }

    public filesToUpload: Array<File>;
    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
