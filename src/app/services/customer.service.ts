import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from '../constants/global';


@Injectable()
export class CustomerService {
    public url: string;
    public identity;
    public token: string;

    constructor(
        private _http: Http
    ) {
        this.url = GLOBAL.url +'customers/';
    }

    addCustomer(token, customer) {
        let params = JSON.stringify(customer);
        let headers = new Headers({
            'Authorization': token,
            'Content-Type': 'application/json'
        })

        return this._http.post(this.url + 'add', params, {headers: headers})
            .map(res => res.json());
    }

    getCustomers() {
        return this._http.get(this.url + 'all').map(res => res.json());
    }

    getCustomer(id) {
        return this._http.get(this.url + 'customer/' + id).map(res => res.json());
    }

    editCustomer(token, customer) {
        let params = JSON.stringify(customer);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.put(this.url + 'update/', params, {headers: headers})
            .map(res => res.json());
    }

    deleteCustomer(token, id) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        let options = new RequestOptions({headers: headers});
        return this._http.delete(this.url + 'delete/' + id, options)
            .map(res => res.json());
    }

    register(customer) {
        let params = JSON.stringify(customer);
        let headers = new Headers({'Content-Type': 'application/json'});

        return this._http.post(this.url + 'add', params, {headers: headers}).map(res => res.json());
    }

    singUp(customer, gettoken = null) {

        if (gettoken != null) {
            customer.gettoken = gettoken;
        }

        let json = JSON.stringify(customer);
        let headers = new Headers({'Content-Type': 'application/json'});

        return this._http.post(this.url + 'login', json, {headers: headers})
            .map(res => res.json());
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        } else {
            this.identity = null;
        }
        return this.identity;
    }

    getToken() {
        let token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }
        return this.token;
    }
}
