import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Menu } from '../interface';

@Component({
  selector: 'app-bs-restaurant',
  templateUrl: './bs-restaurant.component.html',
  styleUrls: ['./bs-restaurant.component.scss']
})
export class BsRestaurantComponent {
  doc: string = "../../assets/document/Menu.pdf";
  options: any[] = [
    { value: 'starter', viewValue: 'Entrées' },
    { value: 'main', viewValue: 'Plats' },
    { value: 'dessert', viewValue: 'Desserts' }
  ];
  menus: Menu[] = [];
  starters: Menu[] = [];
  mains: Menu[] = [];
  desserts: Menu[] = [];
  selectedLocale: any;

  constructor(private restaurantService: RestaurantService) {
    this.selectedLocale = localStorage.getItem('locale');
    this.getAllMenus();
  }

  getAllMenus() {
    this.restaurantService.getAllMenus()
      .subscribe((menus: Menu[]) => {
        this.menus = menus;
        this.starters = [];
        this.mains = [];
        this.desserts = [];
        for (let menu of this.menus) {
          switch (menu.category) {
            case "starter":
              this.starters.push(menu);
              break;
            case "main":
              this.mains.push(menu);
              break;
            case "dessert":
              this.desserts.push(menu);
              break;
            default:
              break;
          }
        }
      }
      );
  }

}
