import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingProjectsShahidJawanFundComponent } from './on-going-projects-shahid-jawan-fund.component';

describe('OnGoingProjectsShahidJawanFundComponent', () => {
  let component: OnGoingProjectsShahidJawanFundComponent;
  let fixture: ComponentFixture<OnGoingProjectsShahidJawanFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnGoingProjectsShahidJawanFundComponent]
    });
    fixture = TestBed.createComponent(OnGoingProjectsShahidJawanFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
