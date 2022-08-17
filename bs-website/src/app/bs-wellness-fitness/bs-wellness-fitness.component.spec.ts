import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsWellnessFitnessComponent } from './bs-wellness-fitness.component';

describe('BsWellnessFitnessComponent', () => {
  let component: BsWellnessFitnessComponent;
  let fixture: ComponentFixture<BsWellnessFitnessComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BsWellnessFitnessComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsWellnessFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
