import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistoComponent } from './registo/registo.component';

const routes: Routes = [
  { path: 'register', component: RegistoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
