import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeLink: string = 'Statistiques';
  navs = [
    { link: '/statistics', name: 'Statistiques' },
    { link: '/promotions', name: 'Promotions' },
    { link: '/menus', name: 'Menus'},
    { link: '/reviews', name: 'Reviews' },
    { link: '/team', name: 'Team'}
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.activeLink = this.navs.filter(
      (nav) => nav.link === this.router.url
    )[0].name;
  }

  /**
   * Naviguation on URL
   * @param nav menu entry
   */
  handleClick(nav: any) {
    this.activeLink = this.navs.filter(
      (nav) => nav.link === this.router.url
    )[0].name;
  }

  logUserOut() {
    this.auth.logUserOut();
  }
}
