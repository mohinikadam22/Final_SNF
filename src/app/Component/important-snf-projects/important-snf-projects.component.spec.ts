import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantSNFProjectsComponent } from './important-snf-projects.component';

describe('ImportantSNFProjectsComponent', () => {
  let component: ImportantSNFProjectsComponent;
  let fixture: ComponentFixture<ImportantSNFProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantSNFProjectsComponent]
    });
    fixture = TestBed.createComponent(ImportantSNFProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
