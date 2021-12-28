import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReviewService } from '../review.service';
import { Review } from '../interface';

@Component({
  selector: 'app-bs-reviews-modal',
  templateUrl: './bs-reviews-modal.component.html',
  styleUrls: ['./bs-reviews-modal.component.scss']
})
export class BsReviewsModalComponent {
  reviewForm = new FormGroup({
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(40)]),
    clean: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required]),
    comfort: new FormControl('', [Validators.required]),
    spot: new FormControl('', [Validators.required]),
    amenity: new FormControl('', [Validators.required]),
    breakfast: new FormControl('', [Validators.required]),
  });
  review: Review | undefined;
  constructor(
    public dialogRef: MatDialogRef<BsReviewsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reviewService: ReviewService
  ) { }

  onSubmit() {
    let date = new Date();
    let today = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let grade = 1 / 6 * (this.reviewForm.value.clean + this.reviewForm.value.service + this.reviewForm.value.comfort + this.reviewForm.value.spot + this.reviewForm.value.amenity + this.reviewForm.value.breakfast);
    let active = (grade >= 6) ? true : false;
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
      }
    }
    if (this.reviewForm.valid) {
      this.reviewService.createReview(this.review).subscribe();
      if (!active) {
        alert("Your review has been registered and will be checked before publication.");
      }
      this.dialogRef.close();
    }
  }


}
