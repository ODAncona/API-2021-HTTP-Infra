import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsReviewsModalComponent } from './bs-reviews-modal.component';

describe('BsReviewsModalComponent', () => {
  let component: BsReviewsModalComponent;
  let fixture: ComponentFixture<BsReviewsModalComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BsReviewsModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsReviewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
