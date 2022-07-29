import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from '../mail.service';
import { Mail } from '../interface';

@Component({
  selector: 'app-bs-wellness-fitness-modal',
  templateUrl: './bs-wellness-fitness-modal.component.html',
  styleUrls: ['./bs-wellness-fitness-modal.component.scss']
})
export class BsWellnessFitnessModalComponent {
  fitnessForm = new UntypedFormGroup({
    offers: new UntypedFormControl([], [Validators.required]),
    firstname: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
    birthdate: new UntypedFormControl('', [Validators.required]),
    address: new UntypedFormControl('', [Validators.required]),
    city: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
  });
  offers: any[] = [
    { description: "1 month", price: "110" },
    { description: "3 months", price: "300" },
    { description: "6 months", price: "450" },
    { description: "12 months", price: "550" },
    { description: "Renew 12 months", price: "510" },
    { description: "Sauna access", price: "150" },
  ];

  constructor(
    public dialogRef: MatDialogRef<BsWellnessFitnessModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mailService: MailService,
    private _snackBar: MatSnackBar
  ) { }

  onSubmit() {
    //console.log(this.fitnessForm.value);
    let content: any = "<html><p>A customer ordered a fitness offer: </p><p>" +
      this.htmlLine("firstname", this.fitnessForm.value.firstname) +
      this.htmlLine("lastname", this.fitnessForm.value.lastname) +
      this.htmlLine("birthdate", this.fitnessForm.value.birthdate) +
      this.htmlLine("address", this.fitnessForm.value.address) +
      this.htmlLine("city", this.fitnessForm.value.city) + "</p></html>";

    let m: Mail = {
      replyTo: this.fitnessForm.value.email,
      to: "olivier_dancona@hotmail.com",
      subject: "Fitness subscription: " + this.fitnessForm.value.firstname,
      html: content,
    };
    this.mailService.sendMail(m).subscribe(
      (res) => this._snackBar.open(res, "close"),
    );
    this.dialogRef.close();
  }

  htmlLine(s: string, c: string) {
    return s + ":\t" + c + "</br>";
  }

}
