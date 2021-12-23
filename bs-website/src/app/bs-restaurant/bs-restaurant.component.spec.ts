import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsRestaurantComponent } from './bs-restaurant.component';

describe('BsRestaurantComponent', () => {
  let component: BsRestaurantComponent;
  let fixture: ComponentFixture<BsRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
