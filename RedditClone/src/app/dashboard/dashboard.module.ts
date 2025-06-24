import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dashboardReducer } from './dashboard-store/reducers/dashboard.reducers';
import { DashboardEffects } from './dashboard-store/effects/dashboard.effects';

@NgModule({
  declarations: [DashboardComponent, DashboardLoginComponent],
  imports: [
    DashboardRoutingModule,
    MaterialModule,
    StoreModule.forFeature('Dashboard', dashboardReducer), // Register feature state
  ],
  exports: [],
})
export class DashboardModule {}
