import {PurchaseOrder} from "./purchaseOrder";

export class Customer {
    constructor(
        public id: string,
        public email: string,
        public name: string,
        public lastName: string,
        public phoneNumber: string,
        public pass: string,
        public role: string,
        public image: string,
        public orders: PurchaseOrder[]
    ) {}
}
