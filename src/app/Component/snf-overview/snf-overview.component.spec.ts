import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNFOverviewComponent } from './snf-overview.component';

describe('SNFOverviewComponent', () => {
  let component: SNFOverviewComponent;
  let fixture: ComponentFixture<SNFOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNFOverviewComponent]
    });
    fixture = TestBed.createComponent(SNFOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});