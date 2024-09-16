import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSidebarComponent } from './grid-sidebar.component';

describe('GridSidebarComponent', () => {
  let component: GridSidebarComponent;
  let fixture: ComponentFixture<GridSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridSidebarComponent]
    });
    fixture = TestBed.createComponent(GridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
