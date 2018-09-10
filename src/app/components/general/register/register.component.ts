import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Customer} from '../../../models/customer';
import {CustomerService} from '../../../services/customer.service';

@Component({
    selector:'register',
    templateUrl:'./register.component.html'
})
export class RegisterComponent implements OnInit{
    public title: String;
    public customer: Customer;
    public status: String;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _customerService:CustomerService
    ){
        this.title = 'Register';
        this.customer = new Customer('', '', '', '', '', '', 'ROLE_USER', '', null);
    }

    ngOnInit(){
        console.log("register.component loaded!");
    }

    onSubmit(registerForm){
        this._customerService.register(this.customer).subscribe(
            response => {
                if (response && response.id){
                    this.status = 'success';
                    registerForm.reset();
                    this.customer = new Customer('', '', '', '', '', '', 'ROLE_USER', '', null);
                }else{
                    this.status = 'error';
                }
                
            },
            error =>{
                console.log(<any>error)
            }
        );
    }
}
