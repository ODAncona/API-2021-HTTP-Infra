import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsBookComponent } from './bs-book.component';

describe('BsBookComponent', () => {
  let component: BsBookComponent;
  let fixture: ComponentFixture<BsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
