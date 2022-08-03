import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../promotion.service';
import { Promotion } from '../interface';

@Component({
  selector: 'app-bs-promotions',
  templateUrl: './bs-promotions.component.html',
  styleUrls: ['./bs-promotions.component.scss'],
})
export class BsPromotionsComponent {
  promotions: Promotion[] = [];
  selectedLocale: any;
  constructor(private promotionService: PromotionService) {
    this.selectedLocale = localStorage.getItem('locale');
    this.getAllPromotions();
  }

  /**
   * Get all promotion in respect to the locale
   */
  getAllPromotions() {
    this.promotionService.getAllPromotions().subscribe((promotions) => {
      this.promotions = promotions.filter(
        (prom: Promotion) => prom.language === this.selectedLocale
      );
    });
  }
}
