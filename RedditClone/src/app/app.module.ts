import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard/dashboard-store/effects/dashboard.effects';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './dashboard/dashboard-store/reducers/dashboard.reducers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ dashboard: dashboardReducer }),
    EffectsModule.forRoot([DashboardEffects]),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
