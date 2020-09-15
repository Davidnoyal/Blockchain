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
    $('#dashboard').addClass('active');
    localStorage.setItem('header', 'Dashboard');
  }

  getTitle(): any {
    return localStorage.getItem('header');
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
