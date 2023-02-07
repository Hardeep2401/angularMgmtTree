import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnencumberedRealEstateAssetsComponent } from './unencumbered-real-estate-assets.component';

describe('UnencumberedRealEstateAssetsComponent', () => {
  let component: UnencumberedRealEstateAssetsComponent;
  let fixture: ComponentFixture<UnencumberedRealEstateAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnencumberedRealEstateAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnencumberedRealEstateAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
