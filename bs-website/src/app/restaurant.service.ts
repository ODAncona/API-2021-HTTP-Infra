import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = API_URL + 'menu';
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
   * @param menu in the database and
   * @returns an observable of the response
   */
  createMenu(menu: Menu) {
    return this.http.post<Menu>(this.apiUrl, menu, this.httpOptions);
  }

  /**
   * Read all menus from the database and
   * @returns an observable of the response with a Menu[] body
   */
  getAllMenus() {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  /**
   * @returns the Daily menu in the database
   */
  getDailyMenu() {
    return this.http.get<any>(this.apiUrl + '/dailyMenu', this.httpOptions);
  }

  /**
   * Update the
   * @param menu in the database and
   * @returns an observable of the response
   */
  updateMenu(menu: any) {
    const formData = new FormData();
    Object.keys(menu).forEach((key) => formData.append(key, menu[key]));
    const httpOptions = {
      headers: new HttpHeaders({
        enctype: 'multipart/form-data',
        Authorization: this.auth,
      }),
    };
    return this.http.put<any>(this.apiUrl, formData, httpOptions);
  }

  /**
   * Delete in the database a menu defined by his
   * @param menuId and
   * @returns an observable of the response
   */
  deleteMenu(menuId: string) {
    let url = this.apiUrl + '/' + menuId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
