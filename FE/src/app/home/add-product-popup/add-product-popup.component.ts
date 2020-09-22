import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.css']
})
export class AddProductPopupComponent implements OnInit {

  product: any;
  productCode: any;
  quantity: any;
  productArray: any = [
    'Sardine',
    'Pomfret',
    'Salmon',
    'Pearlspot',
    'Anchovy',
    'Alaskan Salmon',
    'King Pomfret',
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void {
    console.log('Added Product')
  }

  formValidate(): boolean {
    if (
      (this.product === '' || this.product === undefined) ||
      (this.productCode === '' || this.productCode === undefined) ||
      (this.quantity === '' || this.quantity === undefined)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
