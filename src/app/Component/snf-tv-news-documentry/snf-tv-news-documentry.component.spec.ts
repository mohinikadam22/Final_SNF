import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNFTVNewsDocumentryComponent } from './snf-tv-news-documentry.component';

describe('SNFTVNewsDocumentryComponent', () => {
  let component: SNFTVNewsDocumentryComponent;
  let fixture: ComponentFixture<SNFTVNewsDocumentryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNFTVNewsDocumentryComponent]
    });
    fixture = TestBed.createComponent(SNFTVNewsDocumentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
