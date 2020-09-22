import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedDataService } from '../service/shared-data.service';
import { TrackDetailsPopupComponent } from '../track-details-popup/track-details-popup.component';
declare var $;
@Component({
  selector: 'app-track-product',
  templateUrl: './track-product.component.html',
  styleUrls: ['./track-product.component.css']
})
export class TrackProductComponent implements OnInit {
  product: any;
  constructor(
    private sharedData: SharedDataService,
    private dialog: MatDialog,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.sharedData.product$.subscribe((product: any) => {
      if (product) {
        this.product = product;
      } else {
        this.location.back();
      }
    });
    this.setProgressBar();
  }

  setProgressBar(): void {
    switch (this.product.status) {
      case 'COLLECTED':
        $('.progress-bar').children('li:nth-child(1)').addClass('stop');
        break;
      case 'PROCESSED':
        $('.progress-bar').children('li:nth-child(2)').addClass('stop');
        break;
      case 'PACKED':
        $('.progress-bar').children('li:nth-child(3)').addClass('stop');
        break;
      case 'IN TRANSIT':
        $('.progress-bar').children('li:nth-child(4)').addClass('stop');
        break;
      case 'DELIVERED':
        $('.progress-bar').children('li:nth-child(5)').addClass('stop');
        break;
    }
  }
  updateDialog(): void {
    const dialogRef = this.dialog.open(TrackDetailsPopupComponent, {
      width: '60vw',
      height: '60vh'
    });
  }
}
