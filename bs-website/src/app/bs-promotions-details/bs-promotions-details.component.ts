import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromotionService } from '../promotion.service';
import { Promotion } from '../interface';
import { BsPromotionsModalComponent } from '../bs-promotions-modal/bs-promotions-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bs-promotions-details',
  templateUrl: './bs-promotions-details.component.html',
  styleUrls: ['./bs-promotions-details.component.scss'],
})
export class BsPromotionsDetailsComponent {
  promotion?: Promotion;
  constructor(
    private promotionService: PromotionService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.getAPromotion();
  }

  /**
   * Get the selected promotion(with URL) from DB
   */
  getAPromotion() {
    let id: any = this.route.snapshot.paramMap.get('title');
    this.promotionService
      .getAPromotion(id)
      .subscribe((promotion) => (this.promotion = promotion));
  }

  /**
   * Open the dialog box to book a promotion
   */
  book(): void {
    let id: any = this.route.snapshot.paramMap.get('title');
    let dialogRef = this.dialog.open(BsPromotionsModalComponent, {
      data: [id, this.promotion],
    });
    dialogRef.afterClosed().subscribe();
  }
}
