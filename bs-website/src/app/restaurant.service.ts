import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  private apiUrl = API_URL + 'menu';
  private auth = 'Bearer ' + localStorage.getItem("token");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth
    })
  };
  constructor(private http: HttpClient) { }

  createMenu(menu: Menu) {
    return this.http.post<Menu>(this.apiUrl, menu, this.httpOptions);
  }

  getAllMenus() {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  updateMenu(menu: Menu) {
    return this.http.put<any>(this.apiUrl, menu, this.httpOptions);
  }

  deleteMenu(menuId: string) {
    let url = this.apiUrl + "/" + menuId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
