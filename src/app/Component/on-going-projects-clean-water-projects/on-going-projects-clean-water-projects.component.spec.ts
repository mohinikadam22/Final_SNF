import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingProjectsCleanWaterProjectsComponent } from './on-going-projects-clean-water-projects.component';

describe('OnGoingProjectsCleanWaterProjectsComponent', () => {
  let component: OnGoingProjectsCleanWaterProjectsComponent;
  let fixture: ComponentFixture<OnGoingProjectsCleanWaterProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnGoingProjectsCleanWaterProjectsComponent]
    });
    fixture = TestBed.createComponent(OnGoingProjectsCleanWaterProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
