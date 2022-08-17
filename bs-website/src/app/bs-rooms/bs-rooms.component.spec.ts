import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsRoomsComponent } from './bs-rooms.component';

describe('BsRoomsComponent', () => {
  let component: BsRoomsComponent;
  let fixture: ComponentFixture<BsRoomsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BsRoomsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
