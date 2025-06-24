import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss'],
})
export class DashboardLoginComponent {
  constructor() {}
  openMenu = false;

  onLogin() {
    console.log('Login action triggered');
  }
}
