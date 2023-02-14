import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeclarationsComponent } from './customer-declarations.component';

describe('CustomerDeclarationsComponent', () => {
  let component: CustomerDeclarationsComponent;
  let fixture: ComponentFixture<CustomerDeclarationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDeclarationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
