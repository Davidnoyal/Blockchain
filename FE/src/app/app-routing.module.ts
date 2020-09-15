import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SidebarComponent } from './home/common/sidebar/sidebar.component';
import { ProductsComponent } from './home/products/products.component';
import { TrackShipmentComponent } from './home/track-shipment/track-shipment.component';
import { AuthenticationGuard } from './auth/guard/authentication.guard';
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: SidebarComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: '', component: DashboardComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'track', component: TrackShipmentComponent },
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
