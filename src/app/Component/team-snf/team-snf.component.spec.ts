import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSNFComponent } from './team-snf.component';

describe('TeamSNFComponent', () => {
  let component: TeamSNFComponent;
  let fixture: ComponentFixture<TeamSNFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamSNFComponent]
    });
    fixture = TestBed.createComponent(TeamSNFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
