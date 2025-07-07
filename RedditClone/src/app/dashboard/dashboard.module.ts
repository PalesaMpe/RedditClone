import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './dashboard-store/reducers/dashboard.reducers';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { CarouselItemDirective } from '../shared/components/carousel/carousel-item.directive';

@NgModule({
  declarations: [DashboardComponent, DashboardLoginComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    CarouselComponent,
    CarouselItemDirective,
    StoreModule.forFeature('Dashboard', dashboardReducer), // Register feature state
  ],
  exports: [],
})
export class DashboardModule { }
