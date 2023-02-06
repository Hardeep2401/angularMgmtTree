import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationContinuedComponent } from './application-continued.component';

describe('ApplicationContinuedComponent', () => {
  let component: ApplicationContinuedComponent;
  let fixture: ComponentFixture<ApplicationContinuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationContinuedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationContinuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
