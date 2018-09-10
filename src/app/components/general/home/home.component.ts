import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    title = 'Welcome to Imhungry';

    ngOnInit(){
        console.log("Home Component loaded!")
    }
}
