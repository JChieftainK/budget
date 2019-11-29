import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { EstimatorRoutingModule } from './estimator-routing.module';
import { EstimatorComponent } from './estimator.component';
import { EstimatorInputComponent } from './estimator-input/estimator-input.component';
import { EstimatorDataTableComponent } from './estimator-data-table/estimator-data-table.component';


@NgModule({
  declarations: [EstimatorComponent, EstimatorInputComponent, EstimatorDataTableComponent],
  imports: [
    CommonModule,
    EstimatorRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class EstimatorModule { }
