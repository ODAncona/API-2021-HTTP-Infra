import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { forkJoin, of, throwError } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { RestaurantService } from '../restaurant.service';
import { Menu, Language, DailyMenu } from '../interface';
import { AcceptValidator, MaxSizeValidator } from '@angular-material-components/file-input';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})

export class RestaurantComponent implements OnInit {
  category: string | undefined;
  language: string | undefined;
  languages: Language[] = [
    { value: 'fr', viewValue: 'Français' },
    { value: 'de', viewValue: 'Deutsch' },
    { value: 'en', viewValue: 'English' }
  ];
  menus: Menu[] = [];
  dailyMenu: DailyMenu | undefined;
  maxSize = 2; //Mo

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getDailyMenu()
    this.getAllMenus()
  }

  addMenuFileForm() {
    const fileForm = new FormGroup({
      image: new FormControl('', [MaxSizeValidator(this.maxSize * 1024 * 1024)])
    });
    return fileForm as FormGroup;
  }

  getAllMenus() {
    this.restaurantService.getAllMenus()
      .subscribe(menus => {
        this.menus = menus.reverse();
        this.menus.map(m => {
          m.selected = false;
          m.displayed = true;
          m.fileForm = this.addMenuFileForm();
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
      title: "EDIT_TITLE",
      price: 0,
      image: "",
      description: "EDIT_DESCRIPTION",
      language: undefined,
      category: undefined,
    };
    this.restaurantService.createMenu(m).subscribe(() => this.getAllMenus());
  }

  deleteMenus() {
    let toDelete$ = this.menus.filter(m => m.selected).map(m => { return this.restaurantService.deleteMenu(m._id) });
    forkJoin(toDelete$).subscribe(() => this.getAllMenus());
  }

  updateMenus() {
    let payload = cloneDeep(this.menus);
    payload.map(m => {
      if (m.fileForm.value.image) {
        m.file = m.fileForm.value.image;
      }
      delete m.fileForm;
    });
    let toUpdate$ = payload.filter(m => m.selected).map(m => { return this.restaurantService.updateMenu(m) });
    forkJoin(toUpdate$).subscribe(() => this.getAllMenus());
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
    this.menus.filter(m => { return (m.language === this.language || m.category === this.category) || (m.language == undefined || m.category == undefined) }).map(m => m.displayed = true);
  }
}
