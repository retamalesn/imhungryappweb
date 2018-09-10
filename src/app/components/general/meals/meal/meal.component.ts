import { Component, OnInit } from '@angular/core';
import {MealService} from '../../../../services/meal.service';
import {Meal} from '../../../../models/meal';
import {GLOBAL} from '../../../../constants/global';



@Component({
    selector: 'meals',
    templateUrl: './meal.component.html',
    providers:[
        MealService
    ]
})
export class MealsComponent implements OnInit {
    public title: String;
    public meals: Meal[];
    public url;

    constructor(
        private _mealService: MealService
    ){
        this.title = "Meals";
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log("Meals Component loaded!")
        this.getMeals();
    }

    getMeals() {
        this._mealService.getMeals().subscribe(
            response => {
                if (!response) {
                    console.log("Error to get meals")
                } else {
                    this.meals = response
                }
            },
            error => {
                console.log(<any>error)
            }
        )
    }
}
