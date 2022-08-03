import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  private apiUrl = API_URL + 'review';
  private auth = 'Bearer ' + localStorage.getItem("token");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth
    })
  };

  constructor(private http: HttpClient) { }

  createReview(review: any) {
    return this.http.post<any>(this.apiUrl, review, this.httpOptions);
  }

  getAllReviews() {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  getAllActiveReviews(isActive: boolean) {
    return this.http.get<any>(this.apiUrl + "/" + isActive, this.httpOptions);
  }

  updateReview(reviewId: string) {
    let payload = { reviewId: reviewId }
    return this.http.put<any>(this.apiUrl, payload, this.httpOptions);
  }

  deleteReview(reviewId: string) {
    let url = this.apiUrl + "/" + reviewId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
