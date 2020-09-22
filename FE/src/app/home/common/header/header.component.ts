import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutPopupComponent } from '../../logout-popup/logout-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  logoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutPopupComponent, {
      width: '200px',
      position: { right: '2vw', top: '6vh' },
    });
  }
}
