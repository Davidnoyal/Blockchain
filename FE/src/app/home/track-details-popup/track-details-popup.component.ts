import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-details-popup',
  templateUrl: './track-details-popup.component.html',
  styleUrls: ['./track-details-popup.component.css']
})
export class TrackDetailsPopupComponent implements OnInit {

  trackArray = [
    { status: 'Collected from Fishermen', date: '20 August 2020', time: '3.00 AM' },
    { status: 'Moved to Processing Unit', date: '20 August 2020', time: '3.15 AM' },
    { status: 'Preservation & Categorizing', date: '20 August 2020', time: '3.30 AM' },
    { status: 'Moved to Packing Unit', date: '20 August 2020', time: '3.35 AM' },
    { status: 'Packed & Ready to be Shipped', date: '20 August 2020', time: '4.20 AM' },
    { status: 'Collected from Fishermen', date: '20 August 2020', time: '3.00 AM' },
    { status: 'Moved to Processing Unit', date: '20 August 2020', time: '3.15 AM' },
    { status: 'Preservation & Categorizing', date: '20 August 2020', time: '3.30 AM' },
    { status: 'Moved to Packing Unit', date: '20 August 2020', time: '3.35 AM' },
    { status: 'Packed & Ready to be Shipped', date: '20 August 2020', time: '4.20 AM' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
