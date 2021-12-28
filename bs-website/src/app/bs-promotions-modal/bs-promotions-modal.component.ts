import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from '../mail.service';
import { Mail } from '../interface';

@Component({
  selector: 'app-bs-promotions-modal',
  templateUrl: './bs-promotions-modal.component.html',
  styleUrls: ['./bs-promotions-modal.component.scss']
})
export class BsPromotionsModalComponent {
  promotionForm = new FormGroup({
    promotion: new FormControl(''),
    participant: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.pattern('(^[0-9]{10}$)|(41[0-9]{9}$)')]),
  });
  constructor(public dialogRef: MatDialogRef<BsPromotionsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mailService: MailService,
    private _snackBar: MatSnackBar) { }

  onSubmit() {
    let content: any = "<html><p>A customer ordered an offer: </p><p>" +
      this.htmlLine("promotion", this.data[1].title) +
      this.htmlLine("participant(s)", this.promotionForm.value.participant) +
      this.htmlLine("date", this.promotionForm.value.date.format("MM/DD/YYYY")) +
      this.htmlLine("firstname", this.promotionForm.value.firstname) +
      this.htmlLine("lastname", this.promotionForm.value.lastname) +
      this.htmlLine("telephone", this.promotionForm.value.telephone) +
      this.htmlLine("email", this.promotionForm.value.email) +
      "</p></html>";

    let m: Mail = {
      replyTo: this.promotionForm.value.email,
      to: "olivier_dancona@hotmail.com",
      subject: "Promotion request: " + this.promotionForm.value.firstname,
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
