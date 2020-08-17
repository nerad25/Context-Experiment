import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningExperimentComponent } from './running-experiment.component';

describe('RunningExperimentComponent', () => {
  let component: RunningExperimentComponent;
  let fixture: ComponentFixture<RunningExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
