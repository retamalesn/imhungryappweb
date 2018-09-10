import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Customer} from '../../../models/customer';
import {CustomerService} from '../../../services/customer.service';
import {GLOBAL} from '../../../constants/global';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public title: String;
    public customer: Customer;
    public identity;
    public token;
    public status:String;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _customerService:CustomerService
    ) {
        this.title = 'Login';
        this.customer = new Customer('', '', '', '', '', '', 'ROLE_USER', '', null);
    }

    ngOnInit() {
        console.log(this._customerService.getIdentity());
        console.log(this._customerService.getToken());
    }

    onSubmit() {
        this._customerService.singUp(this.customer).subscribe( 
            response=>{
                this.identity = response.object;
                if(!this.identity || !this.identity.id){
                    console.log('Login error!')
                }else{
                    this.identity.pass = '';
                    localStorage.setItem('identity', JSON.stringify(this.identity));
                    this._customerService.singUp(this.customer, true).subscribe(
                        response => {
                            this.token = response.token;
                            if (this.token.length <= 0) {
                                console.log('Token generation error!');
                            } else {
                                localStorage.setItem('token', this.token);
                                this.status = 'success';    
                                this._router.navigate(['/'])
                            }
                        },
                        error => {
                            this.status = 'error';
                            console.log(<any>error);
                        }
                    )
                }
            },
            error=>{
                var errMsg = <any>error;
                if(errMsg != null){
                    this.status = 'error';
                }
            }
        )
    }
}
