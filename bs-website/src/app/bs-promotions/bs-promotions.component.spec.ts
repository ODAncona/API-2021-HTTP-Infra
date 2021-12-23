import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsPromotionsComponent } from './bs-promotions.component';

describe('BsPromotionsComponent', () => {
  let component: BsPromotionsComponent;
  let fixture: ComponentFixture<BsPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
