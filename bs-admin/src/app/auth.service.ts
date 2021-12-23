import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = "http://localhost:1470/api/auth/login";
  private verifyTokenUrl = "http://localhost:1470/api/auth/verifyToken";
  private auth = 'Bearer ' + localStorage.getItem("token");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth
    })
  };

  constructor(private http: HttpClient, private router: Router) { }

  logUserIn(user: any) {
    return this.http.post<any>(this.loginUrl, user);
  }

  logUserOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    let token = localStorage.getItem('token');
    const url = this.verifyTokenUrl + '/' + token;
    return this.http.get<boolean>(url, this.httpOptions);
  }
}
