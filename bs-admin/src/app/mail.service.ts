import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mail } from './interface';
@Injectable({
  providedIn: 'root'
})

export class MailService {
  private apiUrl = 'http://localhost:1470/api/mail';
  private auth = 'Bearer ' + localStorage.getItem("token");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth
    })
  };
  constructor(private http: HttpClient) { }

  sendMail(mail: Mail) {
    return this.http.post<any>(this.apiUrl, mail, this.httpOptions);
  }
}
