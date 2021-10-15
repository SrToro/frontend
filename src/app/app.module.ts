import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaircutComponent } from './components/public/haircut/haircut.component';
import { ProductsComponent } from './components/public/products/products.component';
import { CarComponent } from './components/private/car/car.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { AuthenticationComponent } from './components/public/authentication/authentication.component';
import { AboutusComponent } from './components/public/aboutus/aboutus.component';
import { NavigationComponent } from './components/public/navigation/navigation.component';
import { BarberComponent } from './components/private/barber/barber.component';
import { AppointmentComponent } from './components/private/appointment/appointment.component';
// import { ReceiptComponent } from './components/private/receipt/receipt.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/public/signup/signup.component';
import { AdministratorComponent } from './components/private/administrator/administrator.component';


@NgModule({
  declarations: [
    AppComponent,
    HaircutComponent,
    ProductsComponent,
    CarComponent,
    ProfileComponent,
    AuthenticationComponent,
    AboutusComponent,
    NavigationComponent,
    BarberComponent,
    AppointmentComponent,
    SignupComponent,
    AdministratorComponent,
    // ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
