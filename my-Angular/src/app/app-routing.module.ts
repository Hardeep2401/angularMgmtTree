import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationContinuedComponent } from './application-continued/application-continued.component';
import { CurrentMortgagesComponent } from './current-mortgages/current-mortgages.component';
import { CardComponent } from './nav-card/card/card.component';
import { NavCardComponent } from './nav-card/nav-card.component';


const routes: Routes = [
  { path: 'navbar', component: NavCardComponent },
  { path: 'home', component: CardComponent },
  { path: 'about', component: ApplicationContinuedComponent },
  { path: 'services', component: CurrentMortgagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
