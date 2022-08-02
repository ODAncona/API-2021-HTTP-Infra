import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Promotion } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  private apiUrl = API_URL + 'promotion';
  private auth = 'Bearer ' + localStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth,
    }),
  };
  constructor(private http: HttpClient) {}

  /**
   * Create a promotion in the database with the API
   * @param promotion to be sent
   * @returns an observable of the response
   */
  createPromotion(promotion: Promotion) {
    return this.http.post<any>(this.apiUrl, promotion, this.httpOptions);
  }

  /**
   * Read all promotion from the database with the API
   * @returns an observable of the response with a response body with Promotion[] type
   */
  getAllPromotions() {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  /**
   * Read a specific promotion from the API defined by her
   * @param promotionId
   * @returns an observable of the response with a response body
   */
  getAPromotion(promotionId: string) {
    let url = this.apiUrl + '/' + promotionId;
    return this.http.get<any>(url, this.httpOptions);
  }

  /**
   * Update via the API the
   * @param promotion in the database and
   * @returns an observable of the response
   */
  updatePromotion(promotion: Promotion) {
    return this.http.put<any>(this.apiUrl, promotion, this.httpOptions);
  }

  /**
   * Delete a promotion with the API in the database defined by her
   * @param promotionId and
   * @returns an observable of the response.
   */
  deletePromotion(promotionId: string) {
    let url = this.apiUrl + '/' + promotionId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
