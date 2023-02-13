import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanMortgagesSecondComponent } from './loan-mortgages-second.component';

describe('LoanMortgagesSecondComponent', () => {
  let component: LoanMortgagesSecondComponent;
  let fixture: ComponentFixture<LoanMortgagesSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanMortgagesSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanMortgagesSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
