import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Menu, DailyMenu } from '../interface';

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
  menus: Menu[] = [];
  starters: Menu[] = [];
  mains: Menu[] = [];
  desserts: Menu[] = [];
  selectedLocale: any;

  constructor(private restaurantService: RestaurantService) {
    this.selectedLocale = localStorage.getItem('locale');
    this.getDailyMenu();
    this.getAllMenus();
  }

  /**
   * Gather all menu from database and sort them by category.
   */
  getAllMenus() {
    this.restaurantService.getAllMenus().subscribe((menus: Menu[]) => {
      this.menus = menus.filter(
        (m: Menu) => m.language === this.selectedLocale
      );
      this.menus.forEach((m) => {
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
      .getDailyMenu()
      .subscribe((dailyMenu: DailyMenu[]) => (this.dailyMenu = dailyMenu[0]));
  }
}
