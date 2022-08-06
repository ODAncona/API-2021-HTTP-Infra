import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { RestaurantService } from '../restaurant.service';
import { Language, Menu, MAX_SIZE } from '../interface';
import { MaxSizeValidator } from '@angular-material-components/file-input';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  category: string | undefined;
  language: string | undefined;
  languages: Language[] = [
    { value: 'fr', viewValue: 'Français' },
    { value: 'de', viewValue: 'Deutsch' },
    { value: 'en', viewValue: 'English' },
  ];
  menus: Menu[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getAllMenus();
  }

  /**
   * @returns menu fileForm
   */
  addMenuFileForm() {
    const fileForm = new UntypedFormGroup({
      pdf: new UntypedFormControl('', [
        MaxSizeValidator(MAX_SIZE * 1024 * 1024),
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
      this.menus.forEach((m) => {
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
      if (m.fileForm.value.pdf) {
        m.file = m.fileForm.value.pdf;       
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
  displayMenus() {
    this.menus.forEach((m) => (m.displayed = false));
    this.menus
      .filter((m) => {
        return (
          m.language === this.language ||
          m.category === this.category ||
          m.language == undefined ||
          m.category == undefined
        );
      })
      .forEach((m) => (m.displayed = true));
    this.menus.sort((a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1));
  }
}
