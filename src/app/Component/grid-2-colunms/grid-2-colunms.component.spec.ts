import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid2ColunmsComponent } from './grid-2-colunms.component';

describe('Grid2ColunmsComponent', () => {
  let component: Grid2ColunmsComponent;
  let fixture: ComponentFixture<Grid2ColunmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grid2ColunmsComponent]
    });
    fixture = TestBed.createComponent(Grid2ColunmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
