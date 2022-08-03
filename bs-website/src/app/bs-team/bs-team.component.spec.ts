import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTeamComponent } from './bs-team.component';

describe('BsTeamComponent', () => {
  let component: BsTeamComponent;
  let fixture: ComponentFixture<BsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
