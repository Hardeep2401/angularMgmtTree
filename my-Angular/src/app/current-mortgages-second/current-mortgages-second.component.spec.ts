import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMortgagesSecondComponent } from './current-mortgages-second.component';

describe('CurrentMortgagesSecondComponent', () => {
  let component: CurrentMortgagesSecondComponent;
  let fixture: ComponentFixture<CurrentMortgagesSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMortgagesSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentMortgagesSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
