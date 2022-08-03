import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = API_URL + 'review';
  private auth = 'Bearer ' + localStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth,
    }),
  };

  constructor(private http: HttpClient) {}

  /**
   * Create a
   * @param review and send it to database
   * @returns an observable
   */
  createReview(review: Review) {
    return this.http.post<any>(this.apiUrl, review, this.httpOptions);
  }

  /**
   * Retrieves all reviews from database
   * @returns an observable
   */
  getAllReviews() {
    return this.http.get<Review>(this.apiUrl, this.httpOptions);
  }

  /**
   * Get all
   * @param isActive reviews of database
   * @returns an observable
   */
  getAllActiveReviews(isActive: boolean) {
    return this.http.get<Review>(this.apiUrl + '/' + isActive, this.httpOptions);
  }

  updateReview(reviewId: string) {
    let payload = { reviewId: reviewId };
    return this.http.put<Review>(this.apiUrl, payload, this.httpOptions);
  }

  deleteReview(reviewId: string) {
    let url = this.apiUrl + '/' + reviewId;
    return this.http.delete<Review>(url, this.httpOptions);
  }
}
