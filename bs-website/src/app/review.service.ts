import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
   * @param review in the database
   * @returns an observable of the response
   */
  createReview(review: any) {
    return this.http.post<any>(this.apiUrl, review, this.httpOptions);
  }

  /**
   * Read all menus from the database and
   * @returns an observable of the response with the Menu[] body
   */
  getAllReviews() {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  /**
   * Read all menus who are
   * @param isActive activated
   * @returns an observable of the response with a Menu[] body
   */
  getAllActiveReviews(isActive: boolean) {
    return this.http.get<any>(this.apiUrl + '/' + isActive, this.httpOptions);
  }

  /**
   * Update the review defined by his
   * @param reviewId
   * @returns an observable of the response
   */
  updateReview(reviewId: string) {
    let payload = { reviewId: reviewId };
    return this.http.put<any>(this.apiUrl, payload, this.httpOptions);
  }

  /**
   * Delete the review defined by his
   * @param reviewId
   * @returns an observable of the response
   */
  deleteReview(reviewId: string) {
    let url = this.apiUrl + '/' + reviewId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
