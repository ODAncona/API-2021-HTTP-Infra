import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bs-book',
  templateUrl: './bs-book.component.html',
  styleUrls: ['./bs-book.component.scss']
})
export class BsBookComponent implements OnInit {
  stepperOrientation: Observable<StepperOrientation>;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required]
  });
  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)').pipe(
      map(({ matches }) => matches ? 'horizontal' : 'vertical')
    );
  }

  ngOnInit(): void {
  }

}
