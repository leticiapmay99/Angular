import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { PhotoListResolver } from './photo-list/photo-list.resolver';

const routes: Routes =[
    { 
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }

    },
    {
        path: 'p/add',
        component: PhotoFormComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }

]

@NgModule({
imports: 
[
    RouterModule.forRoot(routes)
],
exports:
[
    RouterModule
]

})
export class AppRoutingModule {

}