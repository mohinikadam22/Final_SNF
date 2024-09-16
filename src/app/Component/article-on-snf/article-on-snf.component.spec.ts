import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOnSNFComponent } from './article-on-snf.component';

describe('ArticleOnSNFComponent', () => {
  let component: ArticleOnSNFComponent;
  let fixture: ComponentFixture<ArticleOnSNFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleOnSNFComponent]
    });
    fixture = TestBed.createComponent(ArticleOnSNFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
