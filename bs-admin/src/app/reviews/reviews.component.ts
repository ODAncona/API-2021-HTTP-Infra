import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ReviewService } from '../review.service';
import { Review } from '../interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  search = new UntypedFormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  searchField = '';

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.getAllReviews();
  }

  /**
   * Retrieves all menu from database
   */
  getAllReviews() {
    this.reviews = [];
    this.reviewService.getAllReviews().subscribe((reviews: any) => {
      this.reviews = reviews.reverse();
      this.reviews.map((r) => {
        r.selected = false;
        r.displayed = true;
      });
      this.autocompleteFill();
      this.filteredOptions = this.search.valueChanges.pipe(
        startWith(''),
        map((value) => {
          this.reviews.forEach((review) => {
            review.displayed = false;
          });
          let descriptions = this._filter(value);
          descriptions.forEach((description) => {
            for (let review of this.reviews) {
              if (review.description == description) {
                review.displayed = true;
              }
            }
          });
          return descriptions;
        })
      );
    });
  }

  /**
   * This method fills the autocompletion for search bar by description
   */
  autocompleteFill() {
    this.options = [];
    for (let review of this.reviews) {
      let description = review.description;
      this.options.push(description);
    }
  }

  /**
   * filters the entry who satisfies value
   * @param value a string to compare
   * @returns string array of valid token
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  /**
   * Delete all selected reviews from database
   */
  deleteReviews() {
    let toDelete$ = this.reviews
      .filter((r) => r.selected)
      .map((r) => {
        return this.reviewService.deleteReview(r._id!);
      });
    forkJoin(toDelete$).subscribe(() => this.getAllReviews());
  }

  /**
   * Update all selected reviews in database
   */
  updateReviews() {
    let toUpdate$ = this.reviews
      .filter((r) => r.selected)
      .map((r) => {
        return this.reviewService.updateReview(r._id!);
      });
    forkJoin(toUpdate$).subscribe(() => this.getAllReviews());
  }

  /**
   * Select all displayed reviews
   */
  selectAll() {
    if (this.reviews.filter((r) => r.displayed).every((r) => r.selected)) {
      this.reviews.map((r) => (r.selected = false));
    } else {
      this.reviews.filter((r) => r.displayed).map((r) => (r.selected = true));
    }
  }
}
