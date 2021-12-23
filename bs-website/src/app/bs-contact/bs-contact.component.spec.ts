import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsContactComponent } from './bs-contact.component';

describe('BsContactComponent', () => {
  let component: BsContactComponent;
  let fixture: ComponentFixture<BsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
