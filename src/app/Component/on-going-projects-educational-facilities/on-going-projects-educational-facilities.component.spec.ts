import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingProjectsEducationalFacilitiesComponent } from './on-going-projects-educational-facilities.component';

describe('OnGoingProjectsEducationalFacilitiesComponent', () => {
  let component: OnGoingProjectsEducationalFacilitiesComponent;
  let fixture: ComponentFixture<OnGoingProjectsEducationalFacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnGoingProjectsEducationalFacilitiesComponent]
    });
    fixture = TestBed.createComponent(OnGoingProjectsEducationalFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
