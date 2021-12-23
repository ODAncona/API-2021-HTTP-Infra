import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsPromotionsModalComponent } from './bs-promotions-modal.component';

describe('BsPromotionsModalComponent', () => {
  let component: BsPromotionsModalComponent;
  let fixture: ComponentFixture<BsPromotionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsPromotionsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsPromotionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
