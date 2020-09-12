import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SidebarComponent } from './home/common/sidebar/sidebar.component';
import { ProductsComponent } from './home/products/products.component';
import { BatchesComponent } from './home/batches/batches.component';
import { TrackShipmentComponent } from './home/track-shipment/track-shipment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: SidebarComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'batches', component: BatchesComponent },
      { path: 'track', component: TrackShipmentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
