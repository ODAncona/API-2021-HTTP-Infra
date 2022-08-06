import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-bs-book',
  templateUrl: './bs-book.component.html',
  styleUrls: ['./bs-book.component.scss'],
})
export class BsBookComponent {
  range = new UntypedFormGroup({
    start: new UntypedFormControl(),
    end: new UntypedFormControl(),
  });
  bookingLink: string =
    'https://live.ipms247.com/booking/book-rooms-hotelbeausite';
  constructor(private httpClient:HttpClient) {}
}
