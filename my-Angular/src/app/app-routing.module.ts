import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationContinuedComponent } from './application-continued/application-continued.component';
import { BuyersComponent } from './buyers/buyers.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CurrentMortgagesSecondComponent } from './current-mortgages-second/current-mortgages-second.component';
import { CurrentMortgagesComponent } from './current-mortgages/current-mortgages.component';
import { CustomerDeclarationsComponent } from './customer-declarations/customer-declarations.component';
import { FeedbackIndicationComponent } from './feedback-indication/feedback-indication.component';
import { FundsComponent } from './funds/funds.component';
import { InfoCustomerComponent } from './info-customer/info-customer.component';
import { LoanMortgagesSecondComponent } from './loan-mortgages-second/loan-mortgages-second.component';
import { LoansMortgagesComponent } from './loans-mortgages/loans-mortgages.component';
import { CardComponent } from './nav-card/card/card.component';
import { NavCardComponent } from './nav-card/nav-card.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'home', component: CardComponent },
  { path: 'about', component: ApplicationContinuedComponent },
  { path: 'services', component: CurrentMortgagesComponent },
  { path: 'services1', component: CurrentMortgagesSecondComponent },
  { path: 'creditCard', component: CreditCardComponent },
  { path: 'loan', component: LoansMortgagesComponent },
  { path: 'hcpcc', component: LoanMortgagesSecondComponent },
  { path: 'customer', component: CustomerDeclarationsComponent },
  { path: 'feedback', component: FeedbackIndicationComponent },
  { path: 'infoCustomer', component: InfoCustomerComponent },
  { path: 'funds', component: FundsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'buyers', component: BuyersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
