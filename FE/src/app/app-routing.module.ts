import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SidebarComponent } from './home/common/sidebar/sidebar.component';
import { ProductsComponent } from './home/products/products.component';
import { TrackShipmentComponent } from './home/track-shipment/track-shipment.component';
import { AuthenticationGuard } from './auth/guard/authentication.guard';
import { TrackProductComponent } from './home/track-product/track-product.component';
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard', component: SidebarComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: '', component: DashboardComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'track', component: TrackShipmentComponent },
      { path: 'trackProduct', component: TrackProductComponent },
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
