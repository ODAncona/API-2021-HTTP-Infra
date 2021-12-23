import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsWellnessFitnessModalComponent } from './bs-wellness-fitness-modal.component';

describe('BsWellnessFitnessModalComponent', () => {
  let component: BsWellnessFitnessModalComponent;
  let fixture: ComponentFixture<BsWellnessFitnessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsWellnessFitnessModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsWellnessFitnessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
