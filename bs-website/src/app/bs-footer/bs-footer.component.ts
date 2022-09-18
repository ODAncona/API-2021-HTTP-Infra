import { Component } from '@angular/core';
import { BS_PHONE } from '../interface';

@Component({
  selector: 'app-bs-footer',
  templateUrl: './bs-footer.component.html',
  styleUrls: ['./bs-footer.component.scss'],
})
export class BsFooterComponent {
  phone = BS_PHONE;
  constructor() {}
}
