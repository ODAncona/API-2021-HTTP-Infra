import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mail } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private apiUrl = API_URL + 'mail';
  private auth = 'Bearer ' + localStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth,
    }),
  };
  constructor(private http: HttpClient) {}

  /**
   * Send a 
   * @param mail 
   * @returns an observable
   */
  sendMail(mail: Mail) {
    return this.http.post<any>(this.apiUrl, mail, this.httpOptions);
  }
}
