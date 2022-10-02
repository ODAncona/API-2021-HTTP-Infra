import { Component } from '@angular/core';
import { BS_PHONE, BS_INSTAGRAM, BS_FACEBOOK, BS_GOOGLE } from '../interface';

@Component({
  selector: 'app-bs-footer',
  templateUrl: './bs-footer.component.html',
  styleUrls: ['./bs-footer.component.scss'],
})
export class BsFooterComponent {
  phone = BS_PHONE;
  instagramLink = BS_INSTAGRAM;
  facebookLink = BS_FACEBOOK;
  googleLink = BS_GOOGLE;
  constructor() {}
}
