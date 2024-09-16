import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid3ColunmsComponent } from './grid-3-colunms.component';

describe('Grid3ColunmsComponent', () => {
  let component: Grid3ColunmsComponent;
  let fixture: ComponentFixture<Grid3ColunmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grid3ColunmsComponent]
    });
    fixture = TestBed.createComponent(Grid3ColunmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
