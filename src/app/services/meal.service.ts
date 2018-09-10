import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from '../constants/global';


@Injectable()
export class MealService {
    public url: string;

    constructor(
        private _http: Http
    ) {
        this.url = GLOBAL.url +'meals/';
    }

    addMeal(token, meal) {
        let params = JSON.stringify(meal);
        let headers = new Headers({
            'Authorization': token,
            'Content-Type': 'application/json'
        })

        return this._http.post(this.url + 'add', params, {headers: headers})
            .map(res => res.json());
    }

    getMeals() {
        return this._http.get(this.url + 'all').map(res => res.json());
    }

    getMeal(id) {
        return this._http.get(this.url + 'meal/' + id).map(res => res.json());
    }

    editMeal(token, id, meal) {
        let params = JSON.stringify(meal);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.put(this.url + 'update/' + id, params, {headers: headers})
            .map(res => res.json());
    }

    deleteMeal(token, id) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        let options = new RequestOptions({headers: headers});
        return this._http.delete(this.url + 'delete/' + id, options)
            .map(res => res.json());
    }
}
