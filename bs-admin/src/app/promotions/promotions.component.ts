import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { forkJoin, of, throwError } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { PromotionService } from '../promotion.service';
import { Promotion, Language } from '../interface';
import { AcceptValidator, MaxSizeValidator } from '@angular-material-components/file-input';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  language: string | undefined;
  languages: Language[] = [
    { value: 'fr', viewValue: 'Français' },
    { value: 'de', viewValue: 'Deutsch' },
    { value: 'en', viewValue: 'English' }
  ];
  promotions: Promotion[] = [];
  maxSize = 1; //Mo
  imageControl: FormControl;
  public image;
  constructor(private promotionService: PromotionService) {
    this.imageControl = new FormControl('', [MaxSizeValidator(this.maxSize * 1024 * 1024)]);
  }

  ngOnInit(): void {
    this.getAllPromotions();
    this.imageControl.valueChanges.subscribe((image: any) => this.image = image);
  }

  getAllPromotions() {
    this.promotionService.getAllPromotions()
      .subscribe(promotions => {
        this.promotions = promotions;
        for (let promotion of this.promotions) {
          promotion['selected'] = false;
          promotion['displayed'] = true;
        }
      })
  }
  createPromotion() {
    let promotion = {
      title: "Titre",
      subtitle: "Sous-titre",
      image: "../../assets/images/restaurant/Thai-Red-Curry_1-1097x1536.jpg",
      description: "Description",
      language: "fr",
      pdf: ""
    };
    this.promotionService.createPromotion(promotion).subscribe(() => this.getAllPromotions());
  }

  deletePromotions() {
    let toDelete$ = this.promotions.filter(p => p.selected).map(p => { return this.promotionService.deletePromotion(p._id) });
    forkJoin(toDelete$).subscribe(() => this.getAllPromotions());
  }

  updatePromotions() {
    let toUpdate$ = this.promotions.filter(p => p.selected).map(p => { return this.promotionService.updatePromotion(p) });
    forkJoin(toUpdate$)
      .subscribe(() => this.getAllPromotions());
  }

  selectAll() {
    if (this.promotions.filter(p => p.displayed).every(p => p.selected)) {
      this.promotions.map(p => p.selected = false)
    } else {
      this.promotions.filter(p => p.displayed).map(p => p.selected = true)
    }
  }

  displayPromotion() {
    this.promotions.map(p => p.displayed = false);
    this.promotions.filter(p => { return (p.language === this.language || this.language === undefined) }).map(p => p.displayed = true);
  }


}
