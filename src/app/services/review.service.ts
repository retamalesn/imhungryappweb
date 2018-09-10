import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from '../constants/global';


@Injectable()
export class ReviewService {
    public url: string;

    constructor(
        private _http: Http
    ) {
        this.url = GLOBAL.url + 'reviews/';
    }

    addReview(token, review) {
        let params = JSON.stringify(review);
        let headers = new Headers({
            'Authorization': token,
            'Content-Type': 'application/json'
        })

        return this._http.post(this.url + 'add', params, {headers: headers})
            .map(res => res.json());
    }

    getReviews() {
        return this._http.get(this.url + 'all').map(res => res.json());
    }

    getReview(id) {
        return this._http.get(this.url + 'review/' + id).map(res => res.json());
    }

    editReview(token, id, review) {
        let params = JSON.stringify(review);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.put(this.url + 'update/' + id, params, {headers: headers})
            .map(res => res.json());
    }

    deleteReview(token, id) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        let options = new RequestOptions({headers: headers});
        return this._http.delete(this.url + 'delete/' + id, options)
            .map(res => res.json());
    }
}
