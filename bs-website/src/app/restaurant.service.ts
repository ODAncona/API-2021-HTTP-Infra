import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meal,Menu } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = API_URL + 'restaurant/';
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
   * @param meal to the database
   * @returns an observable
   */
   createMeal(meal: Meal) {
    return this.http.post<Meal>(this.apiUrl, meal, this.httpOptions);
  }

  /**
   * @returns an observable containing all meal[]
   */
  getAllMeals() {
    return this.http.get<Meal[]>(this.apiUrl, this.httpOptions);
  }

  /**
   * Update the current
   * @param meal to the database
   * @returns an observable
   */
  updateMeal(meal: Meal) {
    const formData = new FormData();
    Object.keys(meal).forEach((key) =>
      formData.append(key, meal[key as keyof Meal])
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
   * Delete the meal defined by his
   * @param mealId
   * @returns an observable
   */
  deleteMeal(mealId: string) {
    let url = this.apiUrl + mealId;
    return this.http.delete<any>(url, this.httpOptions);
  }

  /**
   * Create a
   * @param menu to the database
   * @returns an observable
   */
  createMenu(menu: any) {
    const formData = new FormData();
    formData.append('title', menu.title);
    formData.append('file', menu.file);
    formData.append('active', menu.active);
    formData.append('pdf', '');
    const httpOptions = {
      headers: new HttpHeaders({
        enctype: 'multipart/form-data',
        Authorization: this.auth,
      }),
    };
    return this.http.post<any>(this.apiUrl + 'menu', formData, httpOptions);
  }

  /**
   * @returns all menus from the database
   */
  getAllMenus() {
    return this.http.get<Menu[]>(this.apiUrl + 'menu', this.httpOptions);
  }

    /**
   * @returns all active menus from the database
   */
     getAllActiveMenus() {     
      return this.http.get<Menu[]>(this.apiUrl + 'menu/active', this.httpOptions);
    }

  /**
   * Update the
   * @param menu
   * @returns an observable
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
    return this.http.put<any>(this.apiUrl + 'menu', formData, httpOptions);
  }

  /**
   * Delete the menu defined by his
   * @param menuId
   * @returns an observable
   */
  deleteMenu(menuId: string) {
    let url = this.apiUrl + 'menu/' + menuId;
    console.log(url);

    return this.http.delete<any>(url, this.httpOptions);
  }
}
