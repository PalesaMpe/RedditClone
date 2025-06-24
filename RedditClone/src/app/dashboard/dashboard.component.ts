import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DynamicPopupComponent } from '../shared/components/dynamic-popup/dynamic-popup.component';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private dialog: MatDialog) {}
  openMenu = false;

  onLogin() {
    this.dialog.open(DynamicPopupComponent, {
      data: {
        close: true,
        styles: {
          width: '450px',
          height: '600px',
        },
        content: {
          title: {
            text: 'Log In',
            styles: {
              fontSize: '48px',
              fontWeight: 'bold',
            },
          },
          description: {
            text: 'By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.',
            styles: {
              padding: '20px 0',
            },
          },
          buttons: [
            {
              label: 'Login',
              type: 'primary',
              action: (context: DashboardLoginComponent) => {
                context.onLogin();
              },
            },
          ],
          components: {
            component: DashboardLoginComponent,
          },
        },
      },
    });
  }
}
