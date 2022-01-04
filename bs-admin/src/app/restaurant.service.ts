import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu, DailyMenu } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  private apiUrl = API_URL + 'menu/';
  private auth = 'Bearer ' + localStorage.getItem('token');
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

  // Menu
  getAllMenus() {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  updateMenu(menu: Menu) {
    const formData = new FormData();
    Object.keys(menu).forEach(key => formData.append(key, menu[key]));
    const httpOptions = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data',
        'Authorization': this.auth
      })
    };
    return this.http.put<any>(this.apiUrl, formData, httpOptions);
  }

  deleteMenu(menuId: string) {
    let url = this.apiUrl + menuId;
    return this.http.delete<any>(url, this.httpOptions);
  }

  // Daily Menu
  createDailyMenu(dailyMenu: any) {
    const formData = new FormData();
    formData.append('title', dailyMenu.title);
    formData.append('file', dailyMenu.file);
    formData.append('active', dailyMenu.active);
    formData.append('pdf', "");
    const httpOptions = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data',
        'Authorization': this.auth
      })
    };
    return this.http.post<any>(this.apiUrl + '/dailyMenu', formData, httpOptions);
  }

  getDailyMenu() {
    return this.http.get<any>(this.apiUrl + '/dailyMenu', this.httpOptions);
  }

  updateDailyMenu(dailyMenu: DailyMenu) {
    const formData = new FormData();
    Object.keys(dailyMenu).forEach(key => formData.append(key, dailyMenu[key]));
    const httpOptions = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data',
        'Authorization': this.auth
      })
    };
    return this.http.put<any>(this.apiUrl + '/dailyMenu', formData, httpOptions);
  }

}
