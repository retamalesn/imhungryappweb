import {Meal} from "./meal";

export class PurchaseOrder {
    constructor(
        public _id: string,
        public address: string,
        public latLng: string,
        public totalCost: number,
        public meals: Meal[]

    ) {}
}
