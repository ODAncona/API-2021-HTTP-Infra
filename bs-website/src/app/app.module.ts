/* ANGULAR */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* ANGULAR MATERIAL */
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

/* EXTERN MODULES */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

/* WEBSITE MODULES */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsHomeComponent } from './bs-home/bs-home.component';
import { BsPromotionsComponent } from './bs-promotions/bs-promotions.component';
import { BsPhotosComponent } from './bs-photos/bs-photos.component';
import { BsRoomsComponent } from './bs-rooms/bs-rooms.component';
import { BsRestaurantComponent } from './bs-restaurant/bs-restaurant.component';
import { BsWellnessComponent } from './bs-wellness/bs-wellness.component';
import { BsWellnessFitnessComponent } from './bs-wellness-fitness/bs-wellness-fitness.component';
import { BsWellnessFitnessModalComponent } from './bs-wellness-fitness-modal/bs-wellness-fitness-modal.component';
import { BsWellnessWellnessComponent } from './bs-wellness-wellness/bs-wellness-wellness.component';
import { BsContactComponent } from './bs-contact/bs-contact.component';
import { BsReviewsComponent } from './bs-reviews/bs-reviews.component';
import { BsNavComponent } from './bs-nav/bs-nav.component';
import { BsPromotionsDetailsComponent } from './bs-promotions-details/bs-promotions-details.component';
import { BsFooterComponent } from './bs-footer/bs-footer.component';
import { BsReviewsModalComponent } from './bs-reviews-modal/bs-reviews-modal.component';
import { BsPromotionsModalComponent } from './bs-promotions-modal/bs-promotions-modal.component';
import { BsBookComponent } from './bs-book/bs-book.component';
import { BsTeamComponent } from './bs-team/bs-team.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavComponent,
    BsHomeComponent,
    BsPromotionsComponent,
    BsPhotosComponent,
    BsRoomsComponent,
    BsRestaurantComponent,
    BsWellnessComponent,
    BsWellnessFitnessComponent,
    BsWellnessFitnessModalComponent,
    BsWellnessWellnessComponent,
    BsContactComponent,
    BsReviewsComponent,
    BsFooterComponent,
    BsReviewsModalComponent,
    BsPromotionsDetailsComponent,
    BsPromotionsModalComponent,
    BsBookComponent,
    BsTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatSliderModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatStepperModule,
    MatSnackBarModule,
    NgbModule,
    PdfViewerModule,
    NgxMatFileInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
