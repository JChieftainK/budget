import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorComponent } from './estimator.component';

xdescribe('EstimatorComponent', () => {
  let component: EstimatorComponent;
  let fixture: ComponentFixture<EstimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
