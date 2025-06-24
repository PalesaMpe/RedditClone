import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';

@NgModule({
  declarations: [DashboardComponent, DashboardLoginComponent],
  imports: [DashboardRoutingModule, MaterialModule],
  exports: [],
})
export class DashboardModule {}
