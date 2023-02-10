import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationContinuedComponent } from './application-continued/application-continued.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CurrentMortgagesSecondComponent } from './current-mortgages-second/current-mortgages-second.component';
import { CurrentMortgagesComponent } from './current-mortgages/current-mortgages.component';
import { LoansMortgagesComponent } from './loans-mortgages/loans-mortgages.component';
import { CardComponent } from './nav-card/card/card.component';
import { NavCardComponent } from './nav-card/nav-card.component';



const routes: Routes = [
  { path: 'navbar', component: NavCardComponent },
  { path: 'home', component: CardComponent },
  { path: 'about', component: ApplicationContinuedComponent },
  { path: 'services', component: CurrentMortgagesComponent },
  { path: 'services1', component: CurrentMortgagesSecondComponent },
  { path: 'creditCard', component: CreditCardComponent },
  { path: 'loan', component: LoansMortgagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
