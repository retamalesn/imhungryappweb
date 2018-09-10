import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../../../../services/review.service';
import {Review} from '../../../../models/review';
import {GLOBAL} from '../../../../constants/global';
import {Customer} from '../../../../models/customer';
import {CustomerService} from '../../../../services/customer.service';



@Component({
    selector: 'reviews',
    templateUrl: './review.component.html',
    providers:[
        ReviewService,
        CustomerService
    ]
})
export class ReviewComponent implements OnInit {
    public title: String;
    public reviews: Review[];
    public customer: any;
    public url;

    constructor(
        private _reviewService: ReviewService,
        private _customerService: CustomerService
    ){
        this.title = "Reviews";
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log("Review Component loaded!")
        this.getReviews();
    }

    getReviews() {
        this._reviewService.getReviews().subscribe(
            response => {
                if (!response) {
                    console.log("Error to get reviews")
                } else {
                    this.reviews = response;
                    this.customer = this._customerService.getCustomer(response.customerId);
                }
            },
            error => {
                console.log(<any>error)
            }
        )
    }
}
