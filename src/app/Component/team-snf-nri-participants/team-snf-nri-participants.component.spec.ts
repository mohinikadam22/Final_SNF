import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSNFNRIParticipantsComponent } from './team-snf-nri-participants.component';

describe('TeamSNFNRIParticipantsComponent', () => {
  let component: TeamSNFNRIParticipantsComponent;
  let fixture: ComponentFixture<TeamSNFNRIParticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamSNFNRIParticipantsComponent]
    });
    fixture = TestBed.createComponent(TeamSNFNRIParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
