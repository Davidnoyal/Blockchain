import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-shipment',
  templateUrl: './track-shipment.component.html',
  styleUrls: ['./track-shipment.component.css']
})
export class TrackShipmentComponent implements OnInit {
  productCode: any;
  constructor() { }

  ngOnInit(): void {
  }

}
