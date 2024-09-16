import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNFInNewsPapersComponent } from './snf-in-news-papers.component';

describe('SNFInNewsPapersComponent', () => {
  let component: SNFInNewsPapersComponent;
  let fixture: ComponentFixture<SNFInNewsPapersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNFInNewsPapersComponent]
    });
    fixture = TestBed.createComponent(SNFInNewsPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
