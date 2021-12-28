import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { forkJoin, of, throwError } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { ReviewService } from '../review.service';
import { Review } from '../interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  search = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  searchField = '';

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getAllReviews();
  }

  getAllReviews() {
    this.reviews = [];
    this.reviewService.getAllReviews()
      .subscribe(
        (reviews: any) => {
          this.reviews = reviews.reverse();
          this.reviews.map(r => {
            r.selected = false;
            r.displayed = true;
          })
          this.autocompleteFill();
          this.filteredOptions = this.search.valueChanges.pipe(
            startWith(''),
            map((value) => {
              this.reviews.forEach(review => { review.displayed = false; });
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
          )
        }
      );
  }

  autocompleteFill() {
    this.options = [];
    for (let review of this.reviews) {
      let description = review.description;
      this.options.push(description);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  deleteReviews() {
    let toDelete$ = this.reviews.filter(r => r.selected).map(r => { return this.reviewService.deleteReview(r._id) });
    forkJoin(toDelete$).subscribe(() => this.getAllReviews());
  }

  updateReviews() {
    let toUpdate$ = this.reviews.filter(r => r.selected).map(r => { return this.reviewService.updateReview(r._id) });
    forkJoin(toUpdate$).subscribe(() => this.getAllReviews());
  }

  selectAll() {
    if (this.reviews.filter(r => r.displayed).every(r => r.selected)) {
      this.reviews.map(r => r.selected = false)
    } else {
      this.reviews.filter(r => r.displayed).map(r => r.selected = true)
    }
  }

}
