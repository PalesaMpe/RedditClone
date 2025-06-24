import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private dialog: MatDialog) {}
  openMenu = false;

  onLogin() {
    // this.dialog.open(LoginDialogComponent, {
    //   width: '400px',
    //   height: 'auto',
    // });
  }
}
