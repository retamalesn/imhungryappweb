import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

///Componentes

import {MainComponent} from './components/main/main.component';
import {EditComponent} from './components/edit/edit.component';
import {AddComponent} from './components/add/add.component';
import {ListComponent} from './components/list/list.component';


const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
            {path: 'list', component: ListComponent},
            {path: 'edit/:id', component: EditComponent},
            {path: 'add', component: AddComponent}
        ]
    },
    {path: 'list-all', component: ListComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule { }
