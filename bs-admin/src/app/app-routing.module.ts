import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MealComponent } from './meal/meal.component';
import { MenusComponent } from './menus/menus.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TeamComponent } from './team/team.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'statistics', component: StatisticsComponent },
      { path: 'promotions', component: PromotionsComponent },
      { path: 'meal', component: MealComponent },
      { path: 'menus', component: MenusComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'team', component: TeamComponent },
    ],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
