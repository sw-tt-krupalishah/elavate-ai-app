import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { IndustryOptionsListComponent } from './industry-options-list/industry-options-list.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
// import { FeatureSelectionListComponent } from './feature-selection-list/feature-selection-list.component';



@NgModule({
  declarations: [IndustryOptionsListComponent, FeatureListComponent, 
    // FeatureSelectionListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
