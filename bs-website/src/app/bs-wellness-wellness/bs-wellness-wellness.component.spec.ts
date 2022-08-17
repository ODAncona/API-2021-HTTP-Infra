import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsWellnessWellnessComponent } from './bs-wellness-wellness.component';

describe('BsWellnessWellnessComponent', () => {
  let component: BsWellnessWellnessComponent;
  let fixture: ComponentFixture<BsWellnessWellnessComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BsWellnessWellnessComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsWellnessWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
