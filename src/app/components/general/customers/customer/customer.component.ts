import { Component, OnInit } from '@angular/core';
import {GLOBAL} from '../../../../constants/global';
import {CustomerService} from '../../../../services/customer.service';
import {Customer} from '../../../../models/customer';



@Component({
    selector: 'customers',
    templateUrl: './customer.component.html',
    providers:[
        CustomerService
    ]
})
export class CustomerComponent implements OnInit {
    public title: String;
    public customers: Customer[];
    public url;

    constructor(
        private _customerService: CustomerService
    ){
        this.title = "Customers";
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log("Customers Component loaded!")
        this.getCustomers();
    }

    getCustomers() {
        this._customerService.getCustomers().subscribe(
            response => {
                if (!response) {
                    console.log("Error to get customer")
                } else {
                    this.customers = response
                }
            },
            error => {
                console.log(<any>error)
            }
        )
    }
}
