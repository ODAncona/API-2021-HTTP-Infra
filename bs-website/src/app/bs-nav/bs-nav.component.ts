import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Locale } from '../interface';

@Component({
  selector: 'app-bs-nav',
  templateUrl: './bs-nav.component.html',
  styleUrls: ['./bs-nav.component.scss'],
})
export class BsNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  activeLink: string = 'Menu';
  navs = [
    { link: 'home', name: $localize`Home` },
    { link: 'rooms', name: $localize`Rooms` },
    { link: 'promotions', name: $localize`Promotions` },
    { link: 'restaurant', name: $localize`Restaurant` },
    { link: 'photos', name: $localize`Photos` },
    { link: 'wellness', name: $localize`Wellness & Fitness` },
    { link: 'reviews', name: $localize`Reviews` },
    { link: 'team', name: $localize`Team` },
    { link: 'region', name: $localize`Region` },
    { link: 'contact', name: $localize`Contact & Map` }
  ];
  selectedLocale: any = 'de';
  localesList: Locale[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    //{ code: 'it', label: 'Italiano' },
    //{ code: 'zh', label: '中文' },
   //{ code: 'ar', label: 'العربية' },
  ];

  constructor(
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.activeLink = this.navs.filter(
      (nav) => nav.link === this.router.url.slice(1).split('/')[0]
    )[0].name;

    if (localStorage.getItem('locale')) {
      this.selectedLocale = localStorage.getItem('locale');
    }
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
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
