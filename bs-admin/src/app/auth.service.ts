import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = API_URL + 'auth/login';
  private verifyTokenUrl = API_URL + 'auth/verifyToken';
  private auth = 'Bearer ' + localStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth,
    }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Log user in
   */
  logUserIn(user: any) {
    return this.http.post<any>(this.loginUrl, user);
  }

  /**
   * Log user out
   */
  logUserOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  /**
   * @returns an observable who contains a boolean showing wheter the user is authenticated
   */
  isAuthenticated(): Observable<boolean> {
    let token = localStorage.getItem('token');
    const url = this.verifyTokenUrl + '/' + token;
    return this.http.get<boolean>(url, this.httpOptions);
  }
}
