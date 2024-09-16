import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingProjectsEnviromentalConservationComponent } from './on-going-projects-enviromental-conservation.component';

describe('OnGoingProjectsEnviromentalConservationComponent', () => {
  let component: OnGoingProjectsEnviromentalConservationComponent;
  let fixture: ComponentFixture<OnGoingProjectsEnviromentalConservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnGoingProjectsEnviromentalConservationComponent]
    });
    fixture = TestBed.createComponent(OnGoingProjectsEnviromentalConservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
