import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistoComponent } from './registo/registo.component';

<<<<<<< HEAD
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {path: "dashboard", component: DashboardComponent }
=======
const routes: Routes = [
  { path: 'register', component: RegistoComponent },
>>>>>>> PSI1-28
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
