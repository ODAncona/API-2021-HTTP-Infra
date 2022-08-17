import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsReviewsComponent } from './bs-reviews.component';

describe('BsReviewsComponent', () => {
  let component: BsReviewsComponent;
  let fixture: ComponentFixture<BsReviewsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BsReviewsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
