import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setHeader();
    $('#openSidebarMenu').prop('checked', false);
  }

  getTitle(): any {
    return localStorage.getItem('header');
  }

  setHeader(): void {
    if (localStorage.getItem('header') != null && localStorage.getItem('header') !== undefined) {
      if (localStorage.getItem('header') === 'Track Shipment') {
        this.clicked('track');
      } else {
        this.clicked(localStorage.getItem('header'));
      }
    }
  }

  clicked(id): any {
    if (id === 'track') {
      localStorage.setItem('header', 'Track Shipment');
    } else {
      localStorage.setItem('header', id);
    }
    $('ul').children().filter('#' + id).addClass('active');
    $('ul').children().not('#' + id).removeClass('active');
    if ($('#openSidebarMenu').prop('checked')) {
      $('#openSidebarMenu').prop('checked', false);
    } else {
      $('#openSidebarMenu').prop('checked', true);
    }
  }
}
