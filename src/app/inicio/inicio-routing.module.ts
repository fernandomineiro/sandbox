import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';


import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';


import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'forget', component: ForgetComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }