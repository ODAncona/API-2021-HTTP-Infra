import { Component, Inject } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReviewService } from '../review.service';
import { Review } from '../interface';

@Component({
  selector: 'app-bs-reviews-modal',
  templateUrl: './bs-reviews-modal.component.html',
  styleUrls: ['./bs-reviews-modal.component.scss'],
})
export class BsReviewsModalComponent {
  toCheck: ValidatorFn[] = [Validators.required, Validators.max(10), Validators.min(1)];
  reviewForm = new UntypedFormGroup({
    author: new UntypedFormControl('', [Validators.required]),
    description: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(40),
    ]),
    rating: new UntypedFormGroup({
      Staff: new UntypedFormControl(7, this.toCheck),
      Cleanliness: new UntypedFormControl(7, this.toCheck),
      Location: new UntypedFormControl(7, this.toCheck),
      Comfort: new UntypedFormControl(7, this.toCheck),
      Breakfast: new UntypedFormControl(7, this.toCheck),
      Value: new UntypedFormControl(7, this.toCheck),
      Service: new UntypedFormControl(7, this.toCheck),
    }),
  });
  review: Review | undefined;
  constructor(
    public dialogRef: MatDialogRef<BsReviewsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reviewService: ReviewService
  ) {}

  /**
   * Submit the user review to the database and check whether it could be activated immediately
   */
  onSubmit() {
    const activeThreshold = 6;
    let today = Date.now().toString();
    let active =
      this.averageRating(this.reviewForm.value.rating) >= activeThreshold
        ? true
        : false;
    this.review = {
      description: this.reviewForm.value.description,
      author: this.reviewForm.value.author,
      date: today,
      active: active,
      rating: this.reviewForm.value.rating,
    };
    if (this.reviewForm.valid) {
      this.reviewService.createReview(this.review).subscribe();
      if (!active) {
        alert(
          $localize `Your review has been registered and will be checked before publication.`
        );
      }
      this.dialogRef.close();
    }
  }

  /**
   * @param rating
   * @returns the average of rating
   */
  averageRating = (r: Object): number =>
    Object.values(r).reduce((a, b) => a + b) / Object.keys(r).length;
}
