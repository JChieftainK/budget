import { Component, OnInit } from '@angular/core';

import { EstimateInput } from './interfaces/estimate-input';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss']
})
export class EstimatorComponent implements OnInit {
  estimationData: EstimateInput;

  constructor() { }

  ngOnInit() {
  }

  inputEstimateEmitted(value: EstimateInput) {
    this.estimationData = value;
  }
}
