import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMortgagesComponent } from './current-mortgages.component';

describe('CurrentMortgagesComponent', () => {
  let component: CurrentMortgagesComponent;
  let fixture: ComponentFixture<CurrentMortgagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMortgagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentMortgagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
