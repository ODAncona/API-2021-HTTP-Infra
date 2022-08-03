import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { RestaurantService } from '../restaurant.service';
import { Menu, Language, DailyMenu } from '../interface';
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
  menus: Menu[] = [];
  dailyMenu: DailyMenu | undefined;
  dailyMenuFile = new UntypedFormControl('');
  dailyMenuName = new UntypedFormControl('');
  maxSize = 2; //Mo

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getDailyMenu();
    this.getAllMenus();
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
   * Retrieves all menus from database
   */
  getAllMenus() {
    this.restaurantService.getAllMenus().subscribe((menus) => {
      this.menus = menus.reverse();
      this.menus.map((m) => {
        m.selected = false;
        m.displayed = true;
        m.fileForm = this.addMenuFileForm();
      });
    });
  }

  /**
   * Create a menu and send it to database
   */
  createMenu() {
    let m = {
      title: 'EDIT_TITLE',
      price: 0,
      image: '',
      description: 'EDIT_DESCRIPTION',
    };
    this.restaurantService.createMenu(m).subscribe(() => this.getAllMenus());
  }

  /**
   * Delete the selected menus in database
   */
  deleteMenus() {
    let toDelete$ = this.menus
      .filter((m) => m.selected)
      .map((m) => {
        return this.restaurantService.deleteMenu(m._id!);
      });
    forkJoin(toDelete$).subscribe(() => this.getAllMenus());
  }

  /**
   * Update the currently selected menus to the database
   */
  updateMenus() {
    let payload = cloneDeep(this.menus);
    payload.map((m) => {
      if (m.fileForm.value.image) {
        m.file = m.fileForm.value.image;
      }
      delete m.fileForm;
    });
    let toUpdate$ = payload
      .filter((m) => m.selected)
      .map((m) => {
        return this.restaurantService.updateMenu(m);
      });
    forkJoin(toUpdate$).subscribe(() => this.getAllMenus());
  }

  /**
   * Create a daily menu and send it to database
   */
  createDailyMenu() {
    let m = {
      title: this.dailyMenuName.value,
      file: this.dailyMenuFile.value,
      active: true,
    };
    this.restaurantService.createDailyMenu(m).subscribe(() => this.ngOnInit());
  }

  /**
   * Retrieves the daily menu from database
   */
  getDailyMenu() {
    this.restaurantService
      .getDailyMenu()
      .subscribe((dailyMenu) => (this.dailyMenu = dailyMenu[0]));
  }

  /**
   * Update the current dailyMenu in database
   * @param d DailyMenu
   */
  updateDailyMenu(d: DailyMenu) {
    this.restaurantService.updateDailyMenu(d).subscribe();
  }

  /**
   * Select all displayed menu depending on criteria
   */
  selectAll() {
    if (this.menus.filter((m) => m.displayed).every((m) => m.selected)) {
      this.menus.map((m) => (m.selected = false));
    } else {
      this.menus.filter((m) => m.displayed).map((m) => (m.selected = true));
    }
  }

  /**
   * Display all menus who satisfies criterias
   */
  displayMenu() {
    this.menus.map((m) => (m.displayed = false));
    this.menus
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
