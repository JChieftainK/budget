import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorDataTableComponent } from './estimator-data-table.component';

xdescribe('EstimatorDataTableComponent', () => {
  let component: EstimatorDataTableComponent;
  let fixture: ComponentFixture<EstimatorDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatorDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatorDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
