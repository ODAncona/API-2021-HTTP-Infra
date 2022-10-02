import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import * as moment from 'moment';

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
  eZ_chkin: string = moment().format('DD-MM-YYYY');
  eZ_chkout: string = moment().add(1, 'days').format('DD-MM-YYYY');
  Locale: string = 'en';

  constructor() {
    if (localStorage.getItem('locale')) {
      this.Locale = localStorage.getItem('locale')!;
    }
  }

  updateData() {
    this.eZ_chkin = this.range.value?.start.format('DD-MM-YYYY');
    this.eZ_chkout = this.range.value?.end.format('DD-MM-YYYY');
  }
}
