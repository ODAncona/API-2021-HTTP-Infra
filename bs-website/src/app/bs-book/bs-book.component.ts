import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl
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
  bookingLink: string = 'https://live.ipms247.com/booking/book-rooms-hotelbeausite';
  constructor() { }

  updateURL() {
    const bookingLink = 'https://live.ipms247.com/booking/book-rooms-hotelbeausite';
    const eZ_chkin = this.range.value?.start.format('DD-MM-YYYY');
    const eZ_chkout = this.range.value?.end.format('DD-MM-YYYY');
    const ArtDt = this.range.value.start.format('DD-MM-YYYY');
    const calformat = 'dd-mm-yy';
    this.bookingLink = bookingLink + "?eZ_chkin=" + eZ_chkin + "&eZ_chkout=" + eZ_chkout + "&calformat=" + calformat + "&ArtDt=" + ArtDt;
    console.log(this.bookingLink);
  }
}
