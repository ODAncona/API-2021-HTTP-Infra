import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { RestaurantService } from '../restaurant.service';
import { Meal, Language, Menu } from '../interface';
import { MaxSizeValidator } from '@angular-material-components/file-input';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  category: string | undefined;
  language: string | undefined;
  languages: Language[] = [
    { value: 'fr', viewValue: 'Français' },
    { value: 'de', viewValue: 'Deutsch' },
    { value: 'en', viewValue: 'English' },
  ];
  meals: Meal[] = [];
  menu: Menu | undefined;
  menuFile = new UntypedFormControl('');
  menuName = new UntypedFormControl('');
  maxSize = 2; //Mo

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getMenu();
    this.getAllMeals();
  }

  /**
   * @returns menu fileForm
   */
  addMenuFileForm() {
    const fileForm = new UntypedFormGroup({
      image: new UntypedFormControl('', [
        MaxSizeValidator(this.maxSize * 1024 * 1024),
      ]),
    });
    return fileForm as UntypedFormGroup;
  }

  /**
   * Retrieves all meals from database
   */
  getAllMeals() {
    this.restaurantService.getAllMeals().subscribe((meals) => {
      this.meals = meals.reverse();
      this.meals.map((m) => {
        m.selected = false;
        m.displayed = true;
        m.fileForm = this.addMenuFileForm();
      });
    });
  }

  /**
   * Create a meal and send it to database
   */
  createMeal() {
    let m = {
      title: 'EDIT_TITLE',
      price: 0,
      image: '',
      description: 'EDIT_DESCRIPTION',
    };
    this.restaurantService.createMeal(m).subscribe(() => this.getAllMeals());
  }

  /**
   * Delete the selected meals in database
   */
  deleteMeals() {
    let toDelete$ = this.meals
      .filter((m) => m.selected)
      .map((m) => {
        return this.restaurantService.deleteMeal(m._id!);
      });
    forkJoin(toDelete$).subscribe(() => this.getAllMeals());
  }

  /**
   * Update the currently selected meals to the database
   */
  updateMeals() {   
    let payload = cloneDeep(this.meals);
    payload.map((m) => {
      if (m.fileForm.value.image) {
        m.file = m.fileForm.value.image;
      }
      delete m.fileForm;
    });
    
    let toUpdate$ = payload
      .filter((m) => m.selected)
      .map((m) => {
        return this.restaurantService.updateMeal(m);
      });
    forkJoin(toUpdate$).subscribe(() => this.getAllMeals());
  }

  /**
   * Create a menu and send it to database
   */
  createMenu() {
    let m = {
      title: this.menuName.value,
      file: this.menuFile.value,
      active: true,
    };
    this.restaurantService.createMenu(m).subscribe(() => this.ngOnInit());
  }

  /**
   * Retrieves the daily menu from database
   */
  getMenu() {
    this.restaurantService
      .getMenu()
      .subscribe((menu) => (this.menu = menu[0]));
  }

  /**
   * Update the current dailyMenu in database
   * @param d DailyMenu
   */
  updateMenu(d: Menu) {
    this.restaurantService.updateMenu(d).subscribe();
  }

  /**
   * Select all displayed menu depending on criteria
   */
  selectAll() {
    if (this.meals.filter((m) => m.displayed).every((m) => m.selected)) {
      this.meals.map((m) => (m.selected = false));
    } else {
      this.meals.filter((m) => m.displayed).map((m) => (m.selected = true));
    }
  }

  /**
   * Display all menus who satisfies criterias
   */
  displayMeals() {
    this.meals.map((m) => (m.displayed = false));
    this.meals
      .filter((m) => {
        return (
          m.language === this.language ||
          m.category === this.category ||
          m.language == undefined ||
          m.category == undefined
        );
      })
      .map((m) => (m.displayed = true));
  }
}
