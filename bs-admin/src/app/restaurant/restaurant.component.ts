import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { RestaurantService } from '../restaurant.service';
import { Meal, Language, MAX_SIZE } from '../interface';
import { MaxSizeValidator } from '@angular-material-components/file-input';
import { cloneDeep } from 'lodash';

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

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getAllMeals();
  }

  /**
   * @returns meal fileForm
   */
  addMealFileForm() {
    const fileForm = new UntypedFormGroup({
      image: new UntypedFormControl('', [
        MaxSizeValidator(MAX_SIZE * 1024 * 1024),
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
        m.fileForm = this.addMealFileForm();
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
