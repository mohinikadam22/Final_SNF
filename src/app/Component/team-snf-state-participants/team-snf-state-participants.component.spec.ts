import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSNFStateParticipantsComponent } from './team-snf-state-participants.component';

describe('TeamSNFStateParticipantsComponent', () => {
  let component: TeamSNFStateParticipantsComponent;
  let fixture: ComponentFixture<TeamSNFStateParticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamSNFStateParticipantsComponent]
    });
    fixture = TestBed.createComponent(TeamSNFStateParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
