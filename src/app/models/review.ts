export class Review {
    constructor(
        public _id: string,
        public name: string,
        public review: string,
        public rating: number,
        public customerId: number
    ) {}
}
