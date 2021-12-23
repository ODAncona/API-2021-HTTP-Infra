import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Promotion } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root'
})

export class PromotionService {
  private apiUrl = API_URL + 'promotion';
  private auth = 'Bearer ' + localStorage.getItem("token");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth
    })
  };
  constructor(private http: HttpClient) { }

  createPromotion(promotion: Promotion) {
    return this.http.post<any>(this.apiUrl, promotion, this.httpOptions);
  }

  getAllPromotions() {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  getAPromotion(promotionId: string) {
    let url = this.apiUrl + "/" + promotionId;
    return this.http.get<any>(url, this.httpOptions);
  }

  updatePromotion(promotion: Promotion) {
    return this.http.put<any>(this.apiUrl, promotion, this.httpOptions);
  }

  deletePromotion(promotionId: string) {
    let url = this.apiUrl + "/" + promotionId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
