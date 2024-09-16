import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent } from './on-going-projects-orphanages-old-age-homes-help-on-birthday.component';

describe('OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent', () => {
  let component: OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent;
  let fixture: ComponentFixture<OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent]
    });
    fixture = TestBed.createComponent(OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
