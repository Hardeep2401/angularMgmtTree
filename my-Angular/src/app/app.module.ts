import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AsideComponent } from './layout/aside/aside.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductsComponent } from './products/products.component';
import { ServerComponent } from './server/server.component';
import { CardComponent } from './nav-card/card/card.component';
import { ApplicationContinuedComponent } from './application-continued/application-continued.component';
import { CurrentMortgagesComponent } from './current-mortgages/current-mortgages.component';
import { CurrentMortgagesSecondComponent } from './current-mortgages-second/current-mortgages-second.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { LoansMortgagesComponent } from './loans-mortgages/loans-mortgages.component';
import { LoanMortgagesSecondComponent } from './loan-mortgages-second/loan-mortgages-second.component';
import { CustomerDeclarationsComponent } from './customer-declarations/customer-declarations.component';
import { FeedbackIndicationComponent } from './feedback-indication/feedback-indication.component';
import { InfoCustomerComponent } from './info-customer/info-customer.component';
import { FundsComponent } from './funds/funds.component';
import { SecurityComponent } from './security/security.component';
import { BuyersComponent } from './buyers/buyers.component';
import { PertinentContactsComponent } from './pertinent-contacts/pertinent-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    ServerComponent,
    CardComponent,
    ApplicationContinuedComponent,
    CurrentMortgagesComponent,
    CurrentMortgagesSecondComponent,
    CreditCardComponent,
    LoansMortgagesComponent,
    LoanMortgagesSecondComponent,
    CustomerDeclarationsComponent,
    FeedbackIndicationComponent,
    InfoCustomerComponent,
    FundsComponent,
    SecurityComponent,
    BuyersComponent,
    PertinentContactsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
