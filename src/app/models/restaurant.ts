import {Meal} from "app/models/meal";
import {Review} from "app/models/review";
import {PurchaseOrder} from "app/models/purchaseOrder";

export class Restaurant {
    constructor(
        public id: string,
        public address: string,
        public adminNumber: string,
        public comercialEmail: string,
        public legalName: string,
        public location: string,
        public meals: Meal[],
        public reviews: Review[],
        public orders: PurchaseOrder[],
        public rating: number
    ) {}
}
