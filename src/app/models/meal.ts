export class Meal {
    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public price: number,
        public image: string,
        public restaurantId: string
    ) {}
}
