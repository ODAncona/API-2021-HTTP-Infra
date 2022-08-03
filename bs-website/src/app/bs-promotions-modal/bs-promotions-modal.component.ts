import { Component, Inject } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from '../mail.service';
import { Mail } from '../interface';

@Component({
  selector: 'app-bs-promotions-modal',
  templateUrl: './bs-promotions-modal.component.html',
  styleUrls: ['./bs-promotions-modal.component.scss'],
})
export class BsPromotionsModalComponent {
  promotionForm = new UntypedFormGroup({
    promotion: new UntypedFormControl(''),
    participant: new UntypedFormControl('', [Validators.required]),
    date: new UntypedFormControl('', [Validators.required]),
    firstname: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastname: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    telephone: new UntypedFormControl('', [
      Validators.pattern('(^[0-9]{10}$)|(41[0-9]{9}$)'),
    ]),
  });
  constructor(
    public dialogRef: MatDialogRef<BsPromotionsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mailService: MailService,
    private _snackBar: MatSnackBar
  ) {}

  /**
   * Send a mail with customer informations to confirm the reservation
   */
  onSubmit() {
    const to = 'olivier_dancona@hotmail.com';
    let content: any =
      '<html><p>A customer ordered an offer/promotion: </p><p>' +
      this.htmlLine('promotion', this.data[1].title) +
      this.htmlLine('participant(s)', this.promotionForm.value.participant) +
      this.htmlLine(
        'date',
        this.promotionForm.value.date.format('MM/DD/YYYY')
      ) +
      this.htmlLine('firstname', this.promotionForm.value.firstname) +
      this.htmlLine('lastname', this.promotionForm.value.lastname) +
      this.htmlLine('telephone', this.promotionForm.value.telephone) +
      this.htmlLine('email', this.promotionForm.value.email) +
      '</p></html>';

    let m: Mail = {
      replyTo: this.promotionForm.value.email,
      to: to,
      subject: 'Promotion request: ' + this.promotionForm.value.firstname,
      html: content,
    };
    this.mailService
      .sendMail(m)
      .subscribe((res) => this._snackBar.open(res, 'close'));
    this.dialogRef.close();
  }

  htmlLine(s: string, c: string) {
    return s + ':\t' + c + '</br>';
  }
}
