import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsPhotosSlideshowComponent } from './bs-photos-slideshow.component';

describe('BsPhotosSlideshowComponent', () => {
  let component: BsPhotosSlideshowComponent;
  let fixture: ComponentFixture<BsPhotosSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsPhotosSlideshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsPhotosSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
