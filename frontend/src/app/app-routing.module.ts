import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";

import { RegistoComponent } from './registo/registo.component';

import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {path: "dashboard", component: DashboardComponent },
  { path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
