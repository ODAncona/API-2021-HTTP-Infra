import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Meal, Menu } from '../interface';

@Component({
  selector: 'app-bs-restaurant',
  templateUrl: './bs-restaurant.component.html',
  styleUrls: ['./bs-restaurant.component.scss'],
})
export class BsRestaurantComponent {
  dailyMenu: any = '';
  options: any[] = [
    { value: 'starter', viewValue: 'Entrées' },
    { value: 'main', viewValue: 'Plats' },
    { value: 'dessert', viewValue: 'Desserts' },
  ];
  meals: Meal[] = [];
  starters: Meal[] = [];
  mains: Meal[] = [];
  desserts: Meal[] = [];
  selectedLocale: any;

  constructor(private restaurantService: RestaurantService) {
    this.selectedLocale = localStorage.getItem('locale');
    this.getDailyMenu();
    this.getAllMeals();
  }

  /**
   * Gather all menu from database and sort them by category.
   */
  getAllMeals() {
    this.restaurantService.getAllMeals().subscribe((meals: Meal[]) => {
      this.meals = meals.filter(
        (m: Meal) => m.language === this.selectedLocale
      );
      this.meals.forEach((m) => {
        switch (m.category) {
          case 'starter':
            this.starters.push(m);
            break;
          case 'main':
            this.mains.push(m);
            break;
          case 'dessert':
            this.desserts.push(m);
            break;
          default:
            break;
        }
      });
    });
  }

  /**
   * Retrieves Daily menu from database.
   */
  getDailyMenu() {
    this.restaurantService
      .getMenu()
      .subscribe((dailyMenu: Menu[]) => (this.dailyMenu = dailyMenu[0]));
  }
}
