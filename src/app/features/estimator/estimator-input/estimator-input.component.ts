import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { EstimateInput } from '../interfaces/estimate-input';

@Component({
  selector: 'app-estimator-input',
  templateUrl: './estimator-input.component.html',
  styleUrls: ['./estimator-input.component.scss']
})
export class EstimatorInputComponent implements OnInit {
  @Output() emitEstimation: EventEmitter<EstimateInput> = new EventEmitter<EstimateInput>();

  estimateForm = this.fb.group({
    currentAmount: 0,
    incomePerMonth: 0,
    expensePerMonth: 0
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  emitInputs() {
    this.emitEstimation.emit(this.estimateForm.getRawValue());
  }
}
