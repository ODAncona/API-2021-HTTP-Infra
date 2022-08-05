import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsRegionComponent } from './bs-region.component';

describe('BsRegionComponent', () => {
  let component: BsRegionComponent;
  let fixture: ComponentFixture<BsRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
