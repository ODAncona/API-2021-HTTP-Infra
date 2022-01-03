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

  updatePromotion(promotion: any) {
    /*
    const formData = new FormData();
    Object.keys(promotion).forEach(key => formData.append(key, promotion[key]));
    return this.http.put<any>(this.apiUrl, formData, this.httpOptions);*/
    let formData: any = new FormData();
    formData.append('_id', promotion._id);
    formData.append('title', promotion.title);
    formData.append('subtitle', promotion.subtitle);
    formData.append('description', promotion.description);
    formData.append('language', promotion.language);
    if (promotion.image) {
      formData.append('image', promotion.image, promotion.image.name);
    }
    if (promotion.pdf) {
      formData.append('pdf', promotion.pdf, promotion.pdf.name);
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data',
        'Authorization': this.auth
      })
    };

    return this.http.put<any>(this.apiUrl, formData, httpOptions);

    /*fetch(this.apiUrl, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));*/

  }

  deletePromotion(promotionId: string) {
    let url = this.apiUrl + "/" + promotionId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
