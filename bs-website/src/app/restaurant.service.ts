import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meal } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = API_URL + 'restaurant';
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
   * @param meal in the database and
   * @returns an observable of the response
   */
  createMeal(meal: Meal) {
    return this.http.post<Meal>(this.apiUrl, meal, this.httpOptions);
  }

  /**
   * Read all meals from the database and
   * @returns an observable of the response with a Menu[] body
   */
  getAllMeals() {
    return this.http.get<Meal[]>(this.apiUrl, this.httpOptions);
  }

  /**
   * @returns the menu in the database
   */
  getMenu() {
    return this.http.get<any>(this.apiUrl + '/menu', this.httpOptions);
  }

  /**
   * Update the
   * @param meal in the database and
   * @returns an observable of the response
   */
  updateMeal(meal: any) {
    const formData = new FormData();
    Object.keys(meal).forEach((key) => formData.append(key, meal[key]));
    const httpOptions = {
      headers: new HttpHeaders({
        enctype: 'multipart/form-data',
        Authorization: this.auth,
      }),
    };
    return this.http.put<any>(this.apiUrl, formData, httpOptions);
  }

  /**
   * Delete in the database a meal defined by his
   * @param mealId and
   * @returns an observable of the response
   */
  deleteMeal(mealId: string) {
    let url = this.apiUrl + '/' + mealId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
