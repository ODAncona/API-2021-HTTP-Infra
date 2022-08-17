import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsPhotosComponent } from './bs-photos.component';

describe('BsPhotosComponent', () => {
  let component: BsPhotosComponent;
  let fixture: ComponentFixture<BsPhotosComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BsPhotosComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
