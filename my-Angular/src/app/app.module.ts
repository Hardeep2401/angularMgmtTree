import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { CrudComponent } from './crud/crud.component';
import { LayoutComponent } from './layout/layout.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { AddComponent } from './crud/add/add.component';
import { EditComponent } from './crud/edit/edit.component';
import { AsideComponent } from './layout/aside/aside.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OfferComponent } from './pages/offer/offer.component';
import { OrderComponent } from './pages/order/order.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './user/admin/admin.component';
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { ProductsComponent } from './products/products.component';
import { ServerComponent } from './server/server.component';
import { NavCardComponent } from './nav-card/nav-card.component';
import { NavBarComponent } from './nav-card/nav-bar/nav-bar.component';
import { CardComponent } from './nav-card/card/card.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
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



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CrudComponent,
    LayoutComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AddComponent,
    EditComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    OfferComponent,
    OrderComponent,
    UserComponent,
    AdminComponent,
    UserAdminComponent,
    ProductsComponent,
    ServerComponent,
    NavCardComponent,
    NavBarComponent,
    CardComponent,
    ApplicationFormComponent,
    ApplicationContinuedComponent,
    CurrentMortgagesComponent,
    CurrentMortgagesSecondComponent,
    CreditCardComponent,
    LoansMortgagesComponent,
    LoanMortgagesSecondComponent,
    CustomerDeclarationsComponent,
    FeedbackIndicationComponent,
    InfoCustomerComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
