import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Locale } from '../interface';

@Component({
  selector: 'app-bs-nav',
  templateUrl: './bs-nav.component.html',
  styleUrls: ['./bs-nav.component.scss'],
})
export class BsNavComponent {
  activeLink: string = 'Menu';
  navs = [
    { link: 'home', name: 'Home' },
    { link: 'promotions', name: 'Promotions' },
    { link: 'photos', name: 'Photos' },
    { link: 'rooms', name: 'Rooms' },
    { link: 'restaurant', name: 'Restaurant' },
    { link: 'wellness', name: 'Wellness - Fitness' },
    { link: 'reviews', name: 'Reviews' },
    { link: 'contact', name: 'Contact - Map' },
  ];
  selectedLocale: any = 'en';
  localesList: Locale[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'it', label: 'Italiano' },
    { code: 'zh', label: '中文' },
    { code: 'ar', label: 'العربية' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.activeLink = this.navs.filter(
      (nav) => nav.link === this.router.url.slice(1).split('/')[0]
    )[0].name;

    if (localStorage.getItem('locale')) {
      this.selectedLocale = localStorage.getItem('locale');
    }
  }

  /**
   * Set the active link to the url
   * @param nav menu entry
   */
  handleClick(nav: any) {
    this.activeLink = this.navs.filter(
      (nav) => nav.link === this.router.url.slice(1)
    )[0].name;
  }

  /**
   * Set the locale to localStorage and reload the page
   */
  handleIls() {
    localStorage.setItem('locale', this.selectedLocale);
    window.location.reload();
  }
}
