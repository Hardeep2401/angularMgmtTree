import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertinentcontactsComponent } from './pertinentcontacts.component';

describe('PertinentcontactsComponent', () => {
  let component: PertinentcontactsComponent;
  let fixture: ComponentFixture<PertinentcontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PertinentcontactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PertinentcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
