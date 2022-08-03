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
   * @param rating
   * @returns the average of rating
   */
  averageRating = (r: Object): number =>
    Object.values(r).reduce((a, b) => a + b) / 6;
}
