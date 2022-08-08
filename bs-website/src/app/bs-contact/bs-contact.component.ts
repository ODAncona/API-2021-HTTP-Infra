import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from '../mail.service';
import { BS_EMAIL, Mail } from '../interface';

@Component({
  selector: 'app-bs-contact',
  templateUrl: './bs-contact.component.html',
  styleUrls: ['./bs-contact.component.scss'],
})
export class BsContactComponent {
  contactForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    content: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(40),
    ]),
  });
  constructor(
    private mailService: MailService,
    private _snackBar: MatSnackBar
  ) {}

  /**
   * This method send the contact form with email
   */
  onSubmit() {
    let m: Mail = {
      replyTo: this.contactForm.value.email,
      to: BS_EMAIL,
      subject: 'Demande de client: ' + this.contactForm.value.name,
      html: this.contactForm.value.content,
    };
    this.mailService.sendMail(m).subscribe(
      (result) => this._snackBar.open(result, 'close'),
      (error) =>
        this._snackBar.open(
          $localize `Unable to send contact informations, please send us an email directly to info@hotelbeausite.ch`,
          $localize `close`
        )
    );
  }
}
