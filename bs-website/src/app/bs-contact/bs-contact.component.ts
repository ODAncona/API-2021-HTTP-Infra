import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from '../mail.service';
import { Mail } from '../interface';
@Component({
  selector: 'app-bs-contact',
  templateUrl: './bs-contact.component.html',
  styleUrls: ['./bs-contact.component.scss']
})
export class BsContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    content: new FormControl('', [Validators.required, Validators.minLength(40)]),
  });
  constructor(private mailService: MailService, private _snackBar: MatSnackBar) { }

  onSubmit() {
    let m: Mail = {
      replyTo: this.contactForm.value.email,
      to: "olivier_dancona@hotmail.com",
      subject: "Demande de client: " + this.contactForm.value.name,
      html: this.contactForm.value.content,
    };
    this.mailService.sendMail(m).subscribe(
      result => this._snackBar.open(result, "close"),
      error => this._snackBar.open("Unable to send mail, please use directly our adresse info@beausite.ch", "close")

    );

  }

}
