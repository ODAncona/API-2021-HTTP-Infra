import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { PromotionService } from '../promotion.service';
import { Promotion, Language } from '../interface';
import { MaxSizeValidator } from '@angular-material-components/file-input';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
  language: string | undefined;
  languages: Language[] = [
    { value: 'fr', viewValue: 'Français' },
    { value: 'de', viewValue: 'Deutsch' },
    { value: 'en', viewValue: 'English' },
  ];
  promotions: Promotion[] = [];
  maxSize = 2; //Mo

  constructor(private promotionService: PromotionService) {}

  ngOnInit(): void {   
    this.getAllPromotions();
  }

  /**
   * @returns fileForm for promotion
   */
  addPromotionFileForm() {
    const fileForm = new UntypedFormGroup({
      image: new UntypedFormControl('', [
        MaxSizeValidator(this.maxSize * 1024 * 1024),
      ]),
      pdf: new UntypedFormControl('', [
        MaxSizeValidator(this.maxSize * 1024 * 1024),
      ]),
    });
    return fileForm as UntypedFormGroup;
  }

  /**
   * Gather all promotion from database
   */
  getAllPromotions() {
    this.promotionService.getAllPromotions().subscribe((promotions) => {
      this.promotions = promotions.reverse();
      this.promotions.map((p) => {
        p.selected = false;
        p.displayed = true;
        p.filesForm = this.addPromotionFileForm();
      });
    });
  }

  /**
   * Create a promotion and send it to database
   */
  createPromotion() {
    let promotion: Promotion = {
      title: 'EDIT',
      subtitle: 'EDIT',
      image: '',
      description: 'EDIT',
      pdf: '',
    };
    this.promotionService
      .createPromotion(promotion)
      .subscribe(() => this.getAllPromotions());
  }

  /**
   * Delete the selected promotions to the database
   */
  deletePromotions() {
    let toDelete$ = this.promotions
      .filter((p) => p.selected)
      .map((p) => {
        return this.promotionService.deletePromotion(p._id!);
      });
    forkJoin(toDelete$).subscribe(() => this.getAllPromotions());
  }

  /**
   * Update the selected promotions to the database
   */
  updatePromotions() {
    let payload = cloneDeep(this.promotions);
    payload.map((p) => {
      if (p.filesForm.value.image) {
        p.image = p.filesForm.value.image;
      }
      if (p.filesForm.value.pdf) {
        p.pdf = p.filesForm.value.pdf;
      }
      delete p.filesForm;
    });
    let toUpdate$ = payload
      .filter((p) => p.selected)
      .map((p) => {
        return this.promotionService.updatePromotion(p);
      });
    forkJoin(toUpdate$).subscribe(() => this.getAllPromotions());
  }

  /**
   * This method select all displayed promotions
   */
  selectAll() {
    if (this.promotions.filter((p) => p.displayed).every((p) => p.selected)) {
      this.promotions.map((p) => (p.selected = false));
    } else {
      this.promotions
        .filter((p) => p.displayed)
        .map((p) => (p.selected = true));
    }
  }

  /**
   * Display promotion with current search choices
   */
  displayPromotion() {
    this.promotions.map((p) => (p.displayed = false));
    this.promotions
      .filter((p) => {
        return p.language === this.language || this.language === undefined;
      })
      .map((p) => (p.displayed = true));
  }
}
