import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSNFMentorsComponent } from './team-snf-mentors.component';

describe('TeamSNFMentorsComponent', () => {
  let component: TeamSNFMentorsComponent;
  let fixture: ComponentFixture<TeamSNFMentorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamSNFMentorsComponent]
    });
    fixture = TestBed.createComponent(TeamSNFMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
