import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FeatureComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [FeatureComponent]
})
export class FeatureModule { }
