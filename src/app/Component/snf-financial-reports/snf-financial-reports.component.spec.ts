import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNFFinancialReportsComponent } from './snf-financial-reports.component';

describe('SNFFinancialReportsComponent', () => {
  let component: SNFFinancialReportsComponent;
  let fixture: ComponentFixture<SNFFinancialReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNFFinancialReportsComponent]
    });
    fixture = TestBed.createComponent(SNFFinancialReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
