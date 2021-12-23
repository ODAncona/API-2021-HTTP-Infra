import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from '../mail.service';
import { Mail } from '../interface';

@Component({
  selector: 'app-bs-wellness-fitness-modal',
  templateUrl: './bs-wellness-fitness-modal.component.html',
  styleUrls: ['./bs-wellness-fitness-modal.component.scss']
})
export class BsWellnessFitnessModalComponent implements OnInit {
  fitnessForm = new FormGroup({
    offers: new FormControl([], [Validators.required]),
    firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    birthdate: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
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

  ngOnInit(): void {
  }

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
