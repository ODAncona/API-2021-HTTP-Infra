import { Component, Inject } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from '../mail.service';
import { Mail, BS_EMAIL } from '../interface';

@Component({
  selector: 'app-bs-wellness-fitness-modal',
  templateUrl: './bs-wellness-fitness-modal.component.html',
  styleUrls: ['./bs-wellness-fitness-modal.component.scss'],
})
export class BsWellnessFitnessModalComponent {
  fitnessForm = new UntypedFormGroup({
    offers: new UntypedFormControl([], [Validators.required]),
    firstname: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastname: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    birthdate: new UntypedFormControl('', [Validators.required]),
    address: new UntypedFormControl('', [Validators.required]),
    city: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    telephone: new UntypedFormControl('', [Validators.required]),
  });
  offers: any[] = [
    { description: $localize`1 month`, price: "110" },
    { description: $localize`3 months`, price: "300" },
    { description: $localize`6 months`, price: "450" },
    { description: $localize`12 months`, price: "550" },
    { description: $localize`12 months renewal`, price: "490" },
  ];

  constructor(
    public dialogRef: MatDialogRef<BsWellnessFitnessModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mailService: MailService,
    private _snackBar: MatSnackBar
  ) {}

  /**
   * Send an email to confirm the fitness subscription
   */
  onSubmit() {
    let content: any =
      '<html><p>A customer ordered a fitness offer: </p><p>' +
      this.htmlLine('firstname', this.fitnessForm.value.firstname) +
      this.htmlLine('lastname', this.fitnessForm.value.lastname) +
      this.htmlLine('birthdate', this.fitnessForm.value.birthdate) +
      this.htmlLine('address', this.fitnessForm.value.address) +
      this.htmlLine('city', this.fitnessForm.value.city) +
      this.htmlLine('telephone', this.fitnessForm.value.telephone) +
      '</p></html>';

    let m: Mail = {
      replyTo: this.fitnessForm.value.email,
      to: BS_EMAIL,
      subject: 'Fitness subscription: ' + this.fitnessForm.value.firstname,
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
