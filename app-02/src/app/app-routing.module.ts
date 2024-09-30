import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';

const routes: Routes = [
{ path: '', redirectTo: 'navbar', pathMatch: 'full'}, 
{ path: 'navbar',component: NavbarComponent  },
{ path: '**', redirectTo: 'navbar' } // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
