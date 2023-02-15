import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackIndicationComponent } from './feedback-indication.component';

describe('FeedbackIndicationComponent', () => {
  let component: FeedbackIndicationComponent;
  let fixture: ComponentFixture<FeedbackIndicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackIndicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
