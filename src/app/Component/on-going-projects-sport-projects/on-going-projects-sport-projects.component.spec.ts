import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingProjectsSportProjectsComponent } from './on-going-projects-sport-projects.component';

describe('OnGoingProjectsSportProjectsComponent', () => {
  let component: OnGoingProjectsSportProjectsComponent;
  let fixture: ComponentFixture<OnGoingProjectsSportProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnGoingProjectsSportProjectsComponent]
    });
    fixture = TestBed.createComponent(OnGoingProjectsSportProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
