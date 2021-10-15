import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/private/profile/profile.component';
import { AboutusComponent } from './components/public/aboutus/aboutus.component';
import { AuthenticationComponent } from './components/public/authentication/authentication.component';
import { CarComponent } from './components/private/car/car.component';
import { HaircutComponent } from './components/public/haircut/haircut.component';
import { ProductsComponent } from './components/public/products/products.component';
import { BarberComponent } from './components/private/barber/barber.component'
import { AppointmentComponent } from './components/private/appointment/appointment.component';
import { IsLoginGuard } from './guards/is-login.guard';
import { SignupComponent } from './components/public/signup/signup.component';
// import { AdministratorComponent } from './components/private/administrator/administrator.component';
// import { ReceiptComponent } from './components/private/receipt/receipt.component';

const routes: Routes = [
  { path:'', redirectTo:'/haircut', pathMatch:'full' },
  { path:'haircut', component: HaircutComponent },
  { path:'barber', canActivate:[IsLoginGuard], component: BarberComponent },
  { path:'appointment', canActivate:[IsLoginGuard], component: AppointmentComponent },
  { path:'products', component: ProductsComponent },
  { path:'car', canActivate:[IsLoginGuard], component: CarComponent },
  { path:'authentication', component: AuthenticationComponent },
  { path:'aboutus', component: AboutusComponent },
  { path:'profile', canActivate:[IsLoginGuard], component: ProfileComponent },
  { path:'signup', component: SignupComponent },
  // { path:'admin', canActivate:[IsLoginGuard], component: AdministratorComponent},
  // { path:'receipt', canActivate:[IsLoginGuard], component: ReceiptComponent},
  { path:'**', redirectTo:'/haircut' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
