import { Component, Inject } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
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
  reviewForm = new UntypedFormGroup({
    author: new UntypedFormControl('', [Validators.required]),
    description: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(40),
    ]),
    clean: new UntypedFormControl('', [Validators.required]),
    service: new UntypedFormControl('', [Validators.required]),
    comfort: new UntypedFormControl('', [Validators.required]),
    spot: new UntypedFormControl('', [Validators.required]),
    amenity: new UntypedFormControl('', [Validators.required]),
    breakfast: new UntypedFormControl('', [Validators.required]),
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
    const activeThreshold = 6
    let today = Date.now().toString();
    let grade =
      (1 / 6) *
      (this.reviewForm.value.clean +
        this.reviewForm.value.service +
        this.reviewForm.value.comfort +
        this.reviewForm.value.spot +
        this.reviewForm.value.amenity +
        this.reviewForm.value.breakfast);
    let active = grade >= activeThreshold ? true : false;
    this.review = {
      description: this.reviewForm.value.description,
      author: this.reviewForm.value.author,
      date: today,
      active: active,
      rating: {
        clean: this.reviewForm.value.clean,
        service: this.reviewForm.value.service,
        comfort: this.reviewForm.value.comfort,
        spot: this.reviewForm.value.spot,
        amenity: this.reviewForm.value.amenity,
        breakfast: this.reviewForm.value.breakfast,
      },
    };
    if (this.reviewForm.valid) {
      this.reviewService.createReview(this.review).subscribe();
      if (!active) {
        alert(
          'Your review has been registered and will be checked before publication.'
        );
      }
      this.dialogRef.close();
    }
  }
}
