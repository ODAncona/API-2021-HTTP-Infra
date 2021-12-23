import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsWellnessComponent } from './bs-wellness.component';

describe('BsWellnessComponent', () => {
  let component: BsWellnessComponent;
  let fixture: ComponentFixture<BsWellnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsWellnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
