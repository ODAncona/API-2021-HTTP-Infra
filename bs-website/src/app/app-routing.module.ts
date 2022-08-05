import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsNavComponent } from './bs-nav/bs-nav.component';
import { BsContactComponent } from './bs-contact/bs-contact.component';
import { BsHomeComponent } from './bs-home/bs-home.component';
import { BsPhotosComponent } from './bs-photos/bs-photos.component';
import { BsPromotionsComponent } from './bs-promotions/bs-promotions.component';
import { BsPromotionsDetailsComponent } from './bs-promotions-details/bs-promotions-details.component';
import { BsRoomsComponent } from './bs-rooms/bs-rooms.component';
import { BsRestaurantComponent } from './bs-restaurant/bs-restaurant.component';
import { BsWellnessComponent } from './bs-wellness/bs-wellness.component';
import { BsWellnessFitnessComponent } from './bs-wellness-fitness/bs-wellness-fitness.component';
import { BsWellnessWellnessComponent } from './bs-wellness-wellness/bs-wellness-wellness.component';
import { BsReviewsComponent } from './bs-reviews/bs-reviews.component';
import { BsTeamComponent } from './bs-team/bs-team.component';
import { BsRegionComponent } from './bs-region/bs-region.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "", component: BsNavComponent, children: [
    { path: "home", component: BsHomeComponent },
    { path: "contact", component: BsContactComponent },
    { path: "photos", component: BsPhotosComponent },
    { path: "promotions", component: BsPromotionsComponent },
    { path: 'promotions/:title', component: BsPromotionsDetailsComponent },
    { path: "rooms", component: BsRoomsComponent },
    { path: "restaurant", component: BsRestaurantComponent },
    { path: "wellness", component: BsWellnessComponent, children:[
        { path: "fitness", component: BsWellnessFitnessComponent },
        { path: "wellness", component: BsWellnessWellnessComponent },
      ] },
    { path: "reviews", component: BsReviewsComponent },
    { path: "team", component: BsTeamComponent },
    { path: "region", component: BsRegionComponent },

  ] },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
