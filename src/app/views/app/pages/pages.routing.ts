import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustryOptionsListComponent } from './industry-options-list/industry-options-list.component';
import { FeatureListComponent } from './feature-list/feature-list.component';

const routes: Routes = [
    { path: '', component: IndustryOptionsListComponent },
    { path: 'feature', component: FeatureListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
