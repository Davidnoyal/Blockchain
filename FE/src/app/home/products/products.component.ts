import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddProductPopupComponent } from '../add-product-popup/add-product-popup.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Router } from '@angular/router';
import { SharedDataService } from '../service/shared-data.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {
  displayedColumns: string[] = ['productName', 'productCode', 'quantity', 'status', 'qrCode', 'track'];
  dataSource = new MatTableDataSource<ProductArray>(productArrayData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private sharedData: SharedDataService,
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addDialog(): void {
    const dialogRef = this.dialog.open(AddProductPopupComponent, {
      width: '60vw',
      height: '46vh'
    });
  }

  generatePdf(productCode): void {
    const documentDefinition = this.getDocumentDefinition(productCode);
    pdfMake.createPdf(documentDefinition).open();
  }

  getDocumentDefinition(productCode): any {
    return {
      content: [
        {
          columns: [
            [
              { text: productCode, style: 'productCode' },
              { qr: productCode, fit: '500', style: 'qrCode', }
            ],
          ]
        }],
      styles: {
        productCode: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [10, 10, 10, 10],
        },
        qrCode: {
          alignment: 'center',
        }
      }
    };
  }

  track(productCode): void {
    const searchResult = productArrayData.filter(item => item.productCode === productCode);
    this.sharedData.setProduct(searchResult[0]);
    this.router.navigate(['/dashboard/trackProduct']);
  }
}

export interface ProductArray {
  id: number;
  productName: string;
  productCode: string;
  quantity: number;
  status: string;
  location: string;
  time: string;
}

const productArrayData: ProductArray[] = [
  { id: 1, productName: 'Sardine', productCode: 'SAR#98', quantity: 550, status: 'COLLECTED', location: 'Nelson', time: '09 : 35 AM, 21 August 2020' },
  { id: 2, productName: 'Pomfret', productCode: 'POM#08', quantity: 150, status: 'PROCESSED', location: 'Richmmond', time: '09 : 35 AM, 21 August 2020' },
  { id: 3, productName: 'Salmon', productCode: 'SAL#47', quantity: 500, status: 'PACKED', location: 'Auckland', time: '09 : 35 AM, 21 August 2020' },
  { id: 4, productName: 'Pearlspot', productCode: 'PS#43', quantity: 750, status: 'IN TRANSIT', location: 'Wellington', time: '09 : 35 AM, 21 August 2020' },
  { id: 5, productName: 'Anchovy', productCode: 'ACH#93', quantity: 580, status: 'DELIVERED', location: 'Hamilton', time: '09 : 35 AM, 21 August 2020' },
  { id: 6, productName: 'Alaskan Salmon', productCode: 'ALS#57', quantity: 510, status: 'COLLECTED', location: 'Sudbary', time: '09 : 35 AM, 21 August 2020' },
  { id: 7, productName: 'King Pomfret', productCode: 'KPM#89', quantity: 150, status: 'PROCESSED', location: 'Stoke', time: '09 : 35 AM, 21 August 2020' },
  { id: 1, productName: 'Sardine', productCode: 'SAR#98', quantity: 550, status: 'COLLECTED', location: 'Nelson', time: '09 : 35 AM, 21 August 2020' },
  { id: 2, productName: 'Pomfret', productCode: 'POM#08', quantity: 150, status: 'PROCESSED', location: 'Richmmond', time: '09 : 35 AM, 21 August 2020' },
  { id: 3, productName: 'Salmon', productCode: 'SAL#47', quantity: 500, status: 'PACKED', location: 'Auckland', time: '09 : 35 AM, 21 August 2020' },
  { id: 4, productName: 'Pearlspot', productCode: 'PS#43', quantity: 750, status: 'IN TRANSIT', location: 'Wellington', time: '09 : 35 AM, 21 August 2020' },
  { id: 5, productName: 'Anchovy', productCode: 'ACH#93', quantity: 580, status: 'DELIVERED', location: 'Hamilton', time: '09 : 35 AM, 21 August 2020' },
  { id: 6, productName: 'Alaskan Salmon', productCode: 'ALS#57', quantity: 510, status: 'COLLECTED', location: 'Sudbary', time: '09 : 35 AM, 21 August 2020' },
  { id: 7, productName: 'King Pomfret', productCode: 'KPM#89', quantity: 150, status: 'PROCESSED', location: 'Stoke', time: '09 : 35 AM, 21 August 2020' },

];
