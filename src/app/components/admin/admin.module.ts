import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NgModel} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AdminRoutingModule} from './admin-routing.module';


///Componentes
import {MainComponent} from './components/main/main.component';
import {EditComponent} from './components/edit/edit.component';
import {AddComponent} from './components/add/add.component';
import {ListComponent} from './components/list/list.component';


@NgModule({
    declarations: [
        MainComponent,
        EditComponent,
        ListComponent,
        AddComponent    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule    ],
    exports:[
        MainComponent,
        EditComponent,
        ListComponent,
        AddComponent
    ], 
    providers:[
    ]
})

export class AdminModule { }

