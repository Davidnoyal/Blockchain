import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedDataService } from '../service/shared-data.service';
@Component({
  selector: 'app-track-shipment',
  templateUrl: './track-shipment.component.html',
  styleUrls: ['./track-shipment.component.css']
})
export class TrackShipmentComponent implements OnInit {
  productCode: any;
  products: any = [
    { id: 1, productName: 'Sardine', productCode: 'SAR#98', quantity: 550, status: 'COLLECTED', location: 'Nelson', time: '09 : 35 AM, 21 August 2020' },
    { id: 2, productName: 'Pomfret', productCode: 'POM#08', quantity: 150, status: 'PROCESSED', location: 'Richmmond', time: '09 : 35 AM, 21 August 2020' },
    { id: 3, productName: 'Salmon', productCode: 'SAL#47', quantity: 500, status: 'PACKED', location: 'Auckland', time: '09 : 35 AM, 21 August 2020' },
    { id: 4, productName: 'Pearlspot', productCode: 'PS#43', quantity: 750, status: 'IN TRANSIT', location: 'Wellington', time: '09 : 35 AM, 21 August 2020' },
    { id: 5, productName: 'Anchovy', productCode: 'ACH#93', quantity: 580, status: 'DELIVERED', location: 'Hamilton', time: '09 : 35 AM, 21 August 2020' },
    { id: 6, productName: 'Alaskan Salmon', productCode: 'ALS#57', quantity: 510, status: 'COLLECTED', location: 'Sudbary', time: '09 : 35 AM, 21 August 2020' },
    { id: 7, productName: 'King Pomfret', productCode: 'KPM#89', quantity: 150, status: 'PROCESSED', location: 'Stoke', time: '09 : 35 AM, 21 August 2020' },
  ];
  constructor(
    private router: Router,
    private sharedData: SharedDataService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  trackProduct(): void {
    if (this.productCode != null && this.productCode !== undefined) {
      const searchResult = this.products.filter(item => item.productCode === this.productCode);
      if (searchResult.length !== 0) {
        this.sharedData.setProduct(searchResult[0]);
        this.router.navigate(['/dashboard/trackProduct']);
      } else {
        const str = 'No Products found for ' + this.productCode;
        this.snackBar.open(str, '', {
          duration: 3000,
        });
      }
    } else {
      this.snackBar.open('Enter a Product Code', '', {
        duration: 3000,
      });
    }
  }
}
