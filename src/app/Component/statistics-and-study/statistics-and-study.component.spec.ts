import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsAndStudyComponent } from './statistics-and-study.component';

describe('StatisticsAndStudyComponent', () => {
  let component: StatisticsAndStudyComponent;
  let fixture: ComponentFixture<StatisticsAndStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsAndStudyComponent]
    });
    fixture = TestBed.createComponent(StatisticsAndStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
