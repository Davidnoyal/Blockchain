import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './home/common/header/header.component';
import { SidebarComponent } from './home/common/sidebar/sidebar.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ProductsComponent } from './home/products/products.component';
import { TrackShipmentComponent } from './home/track-shipment/track-shipment.component';
import { TrackProductComponent } from './home/track-product/track-product.component';
import { AuthGuardService } from './auth/service/auth-guard.service';
import { QRCodeModule } from 'angularx-qrcode';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LogoutPopupComponent } from './home/logout-popup/logout-popup.component';
import { TrackDetailsPopupComponent } from './home/track-details-popup/track-details-popup.component';
import { AddProductPopupComponent } from './home/add-product-popup/add-product-popup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ProductsComponent,
    TrackShipmentComponent,
    TrackProductComponent,
    LogoutPopupComponent,
    TrackDetailsPopupComponent,
    AddProductPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    QRCodeModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
