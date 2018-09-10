import {Component, OnInit} from '@angular/core';
import {Route, Router, ActivatedRoute, Params} from '@angular/router';
import {MealService} from '../../../../services/meal.service';
import {Meal} from '../../../../models/meal';
import {GLOBAL} from '../../../../constants/global';



@Component({
    selector: 'meal-detail',
    templateUrl: './meal-detail.component.html',
    providers: [
        MealService
    ]
})
export class MealDetailComponent implements OnInit {
    
    public meal: Meal;
    public url: string;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _mealService: MealService

    ) {
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log("Meal detail component loaded");
        this.getMeal();
    }

    getMeal(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._mealService.getMeal(id).subscribe(
                response => {
                    if(!response){
                        this._router.navigate(['/']);
                    }else{
                        this.meal = response;
                    }
                },
                error => {
                    console.log(<any>error);
                    this._router.navigate(['/']);
                }
            )
        })
    }
}
