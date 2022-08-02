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
    { title: "Suspension", description: "Suspend your subscription for free (from 7 to 90 days/year)" },
    { title: "Reduction", description: "Special 50% price for Student/AVS/AI/Apprentice" },
    { title: "Sponsorship", description: "Are you recommanding us? Get a free month for each new subscriber" },
  ];
  offers: any[] = [
    { description: "1 month", price: "110" },
    { description: "3 months", price: "300" },
    { description: "6 months", price: "450" },
    { description: "12 months", price: "550" },
    { description: "Renew 12 months", price: "510" },
    { description: "Sauna access", price: "150" },
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
