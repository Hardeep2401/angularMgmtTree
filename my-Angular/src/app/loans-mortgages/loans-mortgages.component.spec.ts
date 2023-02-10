import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansMortgagesComponent } from './loans-mortgages.component';

describe('LoansMortgagesComponent', () => {
  let component: LoansMortgagesComponent;
  let fixture: ComponentFixture<LoansMortgagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansMortgagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansMortgagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
