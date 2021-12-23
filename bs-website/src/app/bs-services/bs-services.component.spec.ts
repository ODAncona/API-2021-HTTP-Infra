import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsServicesComponent } from './bs-services.component';

describe('BsServicesComponent', () => {
  let component: BsServicesComponent;
  let fixture: ComponentFixture<BsServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
