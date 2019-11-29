import { Component, OnInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';

import { EstimateInput } from '../interfaces/estimate-input';

@Component({
  selector: 'app-estimator-data-table',
  templateUrl: './estimator-data-table.component.html',
  styleUrls: ['./estimator-data-table.component.scss']
})
export class EstimatorDataTableComponent implements OnInit, OnChanges {
  @Input() estimationInputData: EstimateInput;

  displayedColumns: string[] = ['numberOfMonths', 'accountAmount'];
  estimatorData = [];

  constructor(private readonly changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (!changes.estimationInputData.isFirstChange()) {
      this.fillTable(changes.estimationInputData.currentValue);
    }
  }

  fillTable(searchData: EstimateInput) {
    let account = searchData.currentAmount;
    const netAmount = searchData.incomePerMonth - searchData.expensePerMonth;
    this.estimatorData = [];
    for (let i = 1; i <= 12; i++) {
      account += netAmount;
      this.estimatorData.push({
        numberOfMonths: i,
        accountAmount: account
      });
      this.changeDetector.markForCheck();
    }
  }
}
