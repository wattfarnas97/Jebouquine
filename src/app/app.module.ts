import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './front-office/header/header.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { HomeComponent } from './front-office/home/home.component';
import { CheckoutComponent } from './front-office/checkout/checkout.component';
import { StoreComponent } from './front-office/store/store.component';
import { ProductComponent } from './front-office/product/product.component';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
import { Route, RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
{ path: 'home',component:HomeComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CheckoutComponent,
    StoreComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,ProductService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
