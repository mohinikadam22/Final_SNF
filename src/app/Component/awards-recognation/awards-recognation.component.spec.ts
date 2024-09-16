import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsRecognationComponent } from './awards-recognation.component';

describe('AwardsRecognationComponent', () => {
  let component: AwardsRecognationComponent;
  let fixture: ComponentFixture<AwardsRecognationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwardsRecognationComponent]
    });
    fixture = TestBed.createComponent(AwardsRecognationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
