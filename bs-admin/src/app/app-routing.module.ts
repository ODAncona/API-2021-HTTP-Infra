import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/statistics', pathMatch: 'full' },
  {
    path: '',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'statistics', component: StatisticsComponent },
      { path: 'promotions', component: PromotionsComponent },
      { path: 'restaurant', component: RestaurantComponent },
      { path: 'reviews', component: ReviewsComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
