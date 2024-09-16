import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingProjectsHealthMedicalProjectsComponent } from './on-going-projects-health-medical-projects.component';

describe('OnGoingProjectsHealthMedicalProjectsComponent', () => {
  let component: OnGoingProjectsHealthMedicalProjectsComponent;
  let fixture: ComponentFixture<OnGoingProjectsHealthMedicalProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnGoingProjectsHealthMedicalProjectsComponent]
    });
    fixture = TestBed.createComponent(OnGoingProjectsHealthMedicalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
