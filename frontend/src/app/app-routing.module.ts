import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";

import { RegistoComponent } from './registo/registo.component';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {path: "dashboard", component: DashboardComponent },
  {path: "profile/:userName", component: UserProfileComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistoComponent },
  {path: 'item/:id', component: ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
