import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsPromotionsDetailsComponent } from './bs-promotions-details.component';

describe('BsPromotionsDetailsComponent', () => {
  let component: BsPromotionsDetailsComponent;
  let fixture: ComponentFixture<BsPromotionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsPromotionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsPromotionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
