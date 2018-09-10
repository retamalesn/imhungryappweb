import { Component, OnInit } from '@angular/core';
import {GLOBAL} from '../../../../constants/global';
import {OrderService} from '../../../../services/order.service';
import {PurchaseOrder} from '../../../../models/purchaseOrder';




@Component({
    selector: 'orders',
    templateUrl: './order.component.html',
    providers:[
        OrderService
    ]
})
export class OrderComponent implements OnInit {
    public title: String;
    public orders: PurchaseOrder[];
    public url;

    constructor(
        private _orderService: OrderService
    ){
        this.title = "Orders";
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log("Orders Component loaded!")
        this.getOrders();
    }

    getOrders() {
        this._orderService.getOrders().subscribe(
            response => {
                if (!response) {
                    console.log("Error to get orders")
                } else {
                    this.orders = response
                }
            },
            error => {
                console.log(<any>error)
            }
        )
    }
}
