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
  criterions: any[] = [
    { name: 'clean', description: 'a' },
    { name: 'service', description: 'b' },
    { name: 'comfort', description: 'c' },
    { name: 'spot', description: 'd' },
    { name: 'amenity', description: 'e' },
    { name: 'breakfast', description: 'f' },
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
      reviews.forEach(
        (review: Review) =>
          (this.average +=
            (review.rating.clean +
              review.rating.service +
              review.rating.comfort +
              review.rating.spot +
              review.rating.amenity +
              review.rating.breakfast) /
            6)
      );
      this.average /= reviews.length;
    });
  }
}
