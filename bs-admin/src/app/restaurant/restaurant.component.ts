import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { forkJoin, of, throwError } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { RestaurantService } from '../restaurant.service';
import { Menu, Language, DailyMenu } from '../interface';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})

export class RestaurantComponent implements OnInit {
  category: any;
  language: any;
  languages: Language[] = [
    { value: 'fr', viewValue: 'Français' },
    { value: 'de', viewValue: 'Deutsch' },
    { value: 'en', viewValue: 'English' }
  ];
  menus: Menu[] = [];
  dailyMenu: DailyMenu;
  
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getAllMenus()
    this.getDailyMenu()
  }

  getAllMenus() {
    this.restaurantService.getAllMenus()
      .subscribe(menus => {
        this.menus = menus;
        this.menus.map(m => {
          m.selected = false;
          m.displayed = true;
        });
      })
  }

  getDailyMenu() {
    this.restaurantService.getDailyMenu().subscribe(
      dailyMenu => this.dailyMenu = dailyMenu[0]
    )
  }

  createMenu() {
    let m = {
      title: "Titre",
      price: 10,
      image: "",
      description: "Description",
      language: "fr",
      category: "main",
    };
    this.restaurantService.createMenu(m).subscribe(() => this.getAllMenus());
  }

  deleteMenus() {
    let toDelete$ = this.menus.filter(m => m.selected).map(m => { return this.restaurantService.deleteMenu(m._id) });
    forkJoin(toDelete$).subscribe(() => this.getAllMenus());
  }

  updateMenus() {
    let toUpdate$ = this.menus.filter(m => m.selected).map(m => { return this.restaurantService.updateMenu(m) });
    forkJoin(toUpdate$)
      .subscribe(() => this.getAllMenus());
  }

  selectAll() {
    if (this.menus.filter(m => m.displayed).every(m => m.selected)) {
      this.menus.map(m => m.selected = false)
    } else {
      this.menus.filter(m => m.displayed).map(m => m.selected = true)
    }
  }

  displayMenu() {
    this.menus.map(m => m.displayed = false);
    this.menus.filter(m => { return (m.language === this.language && m.category === this.category) }).map(m => m.displayed = true);
  }

}
