import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorInputComponent } from './estimator-input.component';

xdescribe('EstimatorInputComponent', () => {
  let component: EstimatorInputComponent;
  let fixture: ComponentFixture<EstimatorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
