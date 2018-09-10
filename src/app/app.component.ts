import { Component, OnInit } from '@angular/core';
import {CustomerService} from './services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GLOBAL} from './constants/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
})
export class AppComponent implements OnInit{

  public title: String;
  emailContacto: string;
  public identity: string;
  public url: string;

  constructor(
    private _customerService: CustomerService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.title = 'ImHungry';
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.identity = this._customerService.getIdentity();
    let testVariable2 = "testVariable2";
  }

  ngDoCheck() {
    this.identity = this._customerService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
