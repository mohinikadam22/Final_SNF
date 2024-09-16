import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersViewComponent } from './founders-view.component';

describe('FoundersViewComponent', () => {
  let component: FoundersViewComponent;
  let fixture: ComponentFixture<FoundersViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoundersViewComponent]
    });
    fixture = TestBed.createComponent(FoundersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
