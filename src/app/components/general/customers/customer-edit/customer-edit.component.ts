import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CustomerService} from '../../../../services/customer.service';
import {Customer} from '../../../../models/customer';
import {GLOBAL} from '../../../../constants/global';


@Component({
    selector:'customer-edit',
    templateUrl:'./customer-edit.component.html',
    providers:[
        CustomerService
    ]
})
export class CustomerEditComponent implements OnInit{
    public title:string;
    public customer: Customer;
    public identity;
    public token;
    public status:string;
    public url:string;

    constructor(
        private _customerService:CustomerService,
    ){
        this.title = 'Update Customer';
        this.identity = this._customerService.getIdentity();
        this.token = this._customerService.getToken();
        this.customer = this.identity;
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log("Component Customer Edit Loaded!");
    }

    onSubmit(){
        this._customerService.editCustomer(this.token, this.customer).subscribe(
            response => {
                if(!response){
                    console.log("JSON.stringify(response) = "+JSON.stringify(response));
                    this.status = 'error';
                }else{
                    console.log("JSON.stringify(response) = " + JSON.stringify(response));
                    this.status = 'success';
                    localStorage.setItem('identity', JSON.stringify(response.object));
                    let params = {type:'', idtomodify:''}
                }
            },
            error => {
                var errorMsg = <any>error;
                if(errorMsg != null){
                    this.status = 'error';
                }
            }
        )
    }

    public filesToUpload:Array<File>;
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
