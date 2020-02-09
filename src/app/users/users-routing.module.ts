import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';


import { NgModule } from '@angular/core';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create' },
    { path: 'create', component: CreateComponent },
    { path: 'delete', component: DeleteComponent },
    { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }