import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recentArray: any = [
    { id: 1, productName: 'Sardine', productCode: 'SAR#98', quantity: 550, status: 'In Transit', location: 'Nelson', time: '09 : 35 AM, 21 August 2020' },
    { id: 2, productName: 'Pomfret', productCode: 'POM#08', quantity: 150, status: 'Delivered', location: 'Richmmond', time: '09 : 35 AM, 21 August 2020' },
    { id: 3, productName: 'Salmon', productCode: 'SAL#47', quantity: 500, status: 'Processed', location: 'Auckland', time: '09 : 35 AM, 21 August 2020' },
    { id: 4, productName: 'Pearlspot', productCode: 'PS#43', quantity: 750, status: 'Delivered', location: 'Wellington', time: '09 : 35 AM, 21 August 2020' },
    { id: 5, productName: 'Anchovy', productCode: 'ACH#93', quantity: 580, status: 'Transit', location: 'Hamilton', time: '09 : 35 AM, 21 August 2020' },
    { id: 6, productName: 'Alaskan Salmon', productCode: 'ALS#57', quantity: 510, status: 'Processed', location: 'Sudbary', time: '09 : 35 AM, 21 August 2020' },
    { id: 7, productName: 'King Pomfret', productCode: 'KPM#89', quantity: 150, status: 'Delivered', location: 'Stoke', time: '09 : 35 AM, 21 August 2020' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
