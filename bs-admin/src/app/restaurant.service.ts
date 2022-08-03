import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu, DailyMenu } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = API_URL + 'menu/';
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
   * @param menu to the database
   * @returns an observable
   */
  createMenu(menu: Menu) {
    return this.http.post<Menu>(this.apiUrl, menu, this.httpOptions);
  }

  /**
   * @returns an observable containing all menus[]
   */
  getAllMenus() {
    return this.http.get<Menu[]>(this.apiUrl, this.httpOptions);
  }

  /**
   * Update the current
   * @param menu to the database
   * @returns an observable
   */
  updateMenu(menu: Menu) {
    const formData = new FormData();
    Object.keys(menu).forEach((key) =>
      formData.append(key, menu[key as keyof Menu])
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
   * Delete the menu defined by his
   * @param menuId
   * @returns an observable
   */
  deleteMenu(menuId: string) {
    let url = this.apiUrl + menuId;
    return this.http.delete<any>(url, this.httpOptions);
  }

  /**
   * Create a
   * @param dailyMenu to the database
   * @returns an observable
   */
  createDailyMenu(dailyMenu: any) {
    const formData = new FormData();
    formData.append('title', dailyMenu.title);
    formData.append('file', dailyMenu.file);
    formData.append('active', dailyMenu.active);
    formData.append('pdf', '');
    const httpOptions = {
      headers: new HttpHeaders({
        enctype: 'multipart/form-data',
        Authorization: this.auth,
      }),
    };
    return this.http.post<any>(
      this.apiUrl + '/dailyMenu',
      formData,
      httpOptions
    );
  }

  /**
   * @returns the dailyMenu from the database
   */
  getDailyMenu() {
    return this.http.get<DailyMenu[]>(
      this.apiUrl + '/dailyMenu',
      this.httpOptions
    );
  }

  /**
   * Update the
   * @param dailyMenu
   * @returns an observable
   */
  updateDailyMenu(dailyMenu: any) {
    const formData = new FormData();
    console.log(dailyMenu);

    Object.keys(dailyMenu).forEach((key) =>
      formData.append(key, dailyMenu[key])
    );
    const httpOptions = {
      headers: new HttpHeaders({
        enctype: 'multipart/form-data',
        Authorization: this.auth,
      }),
    };
    return this.http.put<any>(
      this.apiUrl + '/dailyMenu',
      formData,
      httpOptions
    );
  }
}
