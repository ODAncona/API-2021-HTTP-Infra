import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Promotion } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  private apiUrl = API_URL + 'promotion/';
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
   * @param promotion and send it to database
   * @returns an observable
   */
  createPromotion(promotion: Promotion) {
    return this.http.post<any>(this.apiUrl, promotion, this.httpOptions);
  }

  /**
   * Retrieves all promotion from database
   * @returns an observable containing the promotions[]
   */
  getAllPromotions() {
    return this.http.get<Promotion[]>(this.apiUrl, this.httpOptions);
  }

  /**
   * Get a promotion by his
   * @param promotionId
   * @returns an observable
   */
  getAPromotion(promotionId: string) {
    let url = this.apiUrl + '/' + promotionId;
    return this.http.get<Promotion>(url, this.httpOptions);
  }

  /**
   * Update the promotion
   * @param promotion
   * @returns an observable
   */
  updatePromotion(promotion: any) {
    const formData = new FormData();
    Object.keys(promotion).forEach((key) =>
      formData.append(key, promotion[key])
    );
    const httpOptions = {
      headers: new HttpHeaders({
        enctype: 'multipart/form-data',
        Authorization: this.auth,
      }),
    };
    return this.http.put<any>(this.apiUrl, formData, httpOptions);
  }

  /**
   * Delete a promotion defined by her
   * @param promotionId
   * @returns an observable
   */
  deletePromotion(promotionId: string) {
    let url = this.apiUrl + promotionId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
