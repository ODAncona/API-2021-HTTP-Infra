import { Component } from '@angular/core';
import { BsWellnessFitnessModalComponent } from '../bs-wellness-fitness-modal/bs-wellness-fitness-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bs-wellness-fitness',
  templateUrl: './bs-wellness-fitness.component.html',
  styleUrls: ['./bs-wellness-fitness.component.scss']
})
export class BsWellnessFitnessComponent {
  benefits: any[] = [
    { title: "Take a free break", description: $localize`Going on a holiday? No problem, you can take a break from our gym for free (annual subscriptions, 7 to 90 days per year) *` },
    { title: "Discount", description: $localize`Special discount with the Adelboden Guest Card, CHF 15 instead of CHF 20 per entry.` },
    { title: "Referral", description: $localize`Refer a friend and get a free month for each new subscriber! *` },
  ];
  offers: any[] = [
    { description: $localize`1 month`, price: "110" },
    { description: $localize`3 months`, price: "300" },
    { description: $localize`6 months`, price: "450" },
    { description: $localize`12 months`, price: "550" },
    { description: $localize`12 months renewal`, price: "490" }
  ];

  constructor(public dialog: MatDialog) { }

  /**
   * Open the dialog box to order a fitness subscription.
   */
  orderSubscription() {
    let dialogRef = this.dialog.open(BsWellnessFitnessModalComponent, { data: "test" });
    dialogRef.afterClosed().subscribe();
  }

}
