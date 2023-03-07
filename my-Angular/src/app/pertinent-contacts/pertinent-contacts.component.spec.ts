import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertinentContactsComponent } from './pertinent-contacts.component';

describe('PertinentContactsComponent', () => {
  let component: PertinentContactsComponent;
  let fixture: ComponentFixture<PertinentContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PertinentContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PertinentContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
