import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {path: "dashboard", component: DashboardComponent },
  {path: "profile", component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
