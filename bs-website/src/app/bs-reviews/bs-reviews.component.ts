import { Component } from '@angular/core';
import { BsReviewsModalComponent } from '../bs-reviews-modal/bs-reviews-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ReviewService } from '../review.service';
import { Review } from '../interface';

@Component({
  selector: 'app-bs-reviews',
  templateUrl: './bs-reviews.component.html',
  styleUrls: ['./bs-reviews.component.scss'],
})
export class BsReviewsComponent {
  benefits: any[] = [
    {
      title: 'Booking',
      url: 'https://www.booking.com/hotel/ch/beau-site.fr.html#tab-reviews',
      img: '../../assets/images/logo/booking.svg',
    },
    {
      title: 'Trip Advisor',
      url: 'https://fr.tripadvisor.ch/Hotel_Review-g198862-d206114-Reviews-Hotel_Beau_Site-Adelboden_Bernese_Oberland_Canton_of_Bern.html',
      img: '../../assets/images/logo/tripadvisor.svg',
    },
    {
      title: 'Google Maps',
      url: 'https://www.google.com/travel/hotels/google%20maps%20hotel%20Beau-Site%20adelboden/entity/CgoI8dKr69ykt7QZEAE/reviews?q=google%20maps%20hotel%20Beau-Site%20adelboden&g2lb=2502548%2C2503771%2C2503781%2C2504032%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4703207%2C4718358%2C4722900%2C4723331%2C4741665%2C4757164%2C4758493%2C4762561%2C4786958%2C4790928%2C4794648%2C4807824%2C4809314%2C4814050%2C4819463%2C4819464%2C4828572&hl=fr-CH&gl=ch&cs=1&ssta=1&rp=EPHSq-vcpLe0GRDx0qvr3KS3tBk4AkAASAHAAQI&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAEaSQorEicyJTB4NDc4ZjAyMjE0YzRiMWQxNToweDE5NjhkZDI1Y2Q2YWU5NzEaABIaEhQKBwjmDxAIGBYSBwjmDxAIGBcYATICEAAqCQoFOgNDSEYaAA',
      img: '../../assets/images/logo/google.svg',
    },
  ];
  reviews: Review[] = [];
  average: number = 0;

  constructor(public dialog: MatDialog, private reviewService: ReviewService) {
    this.getAllActiveReviews();
  }

  /**
   * Open the dialog for writing a review
   */
  addReview() {
    let dialogRef = this.dialog.open(BsReviewsModalComponent, { data: 'test' });
    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

  /**
   * Retrieves all active Reviews from database and compute the score
   */
  getAllActiveReviews(): any {
    this.reviewService.getAllActiveReviews(true).subscribe((reviews) => {
      this.reviews = reviews.reverse();
      this.average = 0;
      reviews.forEach(
        (r: Review) => (this.average += this.averageRating(r.rating))
      );
      this.average /= reviews.length;
    });
  }

  /**
   * @param r
   * @returns the average of rating
   */
  averageRating = (r: Object): number =>
    Object.values(r).reduce((a, b) => a + b) / Object.keys(r).length;
}
