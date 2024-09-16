import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAVolunteerComponent } from './become-a-volunteer.component';

describe('BecomeAVolunteerComponent', () => {
  let component: BecomeAVolunteerComponent;
  let fixture: ComponentFixture<BecomeAVolunteerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeAVolunteerComponent]
    });
    fixture = TestBed.createComponent(BecomeAVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
