import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Meal, Menu } from '../interface';

@Component({
  selector: 'app-bs-restaurant',
  templateUrl: './bs-restaurant.component.html',
  styleUrls: ['./bs-restaurant.component.scss'],
})
export class BsRestaurantComponent {
  menus: Menu[] = [];
  carteMenu: any;
  halfboard: any;
  banquets: Menu[] = [];
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
    this.getAllMenus();
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
   * Retrieves all menus from database.
   */
  getAllMenus() {
    this.restaurantService.getAllActiveMenus().subscribe((menus) => {
      this.menus = menus.reverse();
      this.menus.forEach((m) => {       
        switch (m.category) {
          case 'carte':
            this.carteMenu = m;
            break;
          case 'halfboard':
            this.halfboard = m;
            break;
          case 'banquet':
            this.banquets.push(m);
            break;
          default:
            break;
        }
      });
    });
  }
}
