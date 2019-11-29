import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimatorComponent } from './estimator.component';


const routes: Routes = [
  {
    path: '',
    component: EstimatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatorRoutingModule { }
