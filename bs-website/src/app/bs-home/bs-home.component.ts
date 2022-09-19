import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bs-home',
  templateUrl: './bs-home.component.html',
  styleUrls: ['./bs-home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class BsHomeComponent {
  images = [
    '../../assets/images/home/slider1.webp',
    '../../assets/images/home/slider2.webp',
    '../../assets/images/home/slider3.webp',
    '../../assets/images/home/slider4.webp',
    '../../assets/images/home/slider5.webp',
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  cards: any[] = [
    {
      title: $localize`Rooms`,
      url: '/rooms',
      img: '../../assets/images/home/card_rooms.webp',
      description: $localize`Feel at home.`
    },
    {
      title: $localize`Restaurant`,
      url: '/restaurant',
      img: '../../assets/images/home/card_restaurant.webp',
      description: $localize`Delight yourself.`
    },
    {
      title: $localize`Promotions`,
      url: '/promotions',
      img: '../../assets/images/home/card_promotions.webp',
      description: $localize`Benefits from our offers.`
    },
    {
      title: $localize`Wellness & Fitness`,
      url: '/wellness',
      img: '../../assets/images/home/card_wellness_fitness.webp',
      description: $localize`Awaken your senses.`
    },
    {
      title: $localize`Region`,
      url: '/region',
      img: '../../assets/images/home/card_region.webp',
      description: $localize`Discover the Bernese Oberland.`
    },
    {
      title: $localize`Team`,
      url: '/team',
      img: '../../assets/images/home/card_team.webp',
      description: $localize`Meet our team.`
    },
  ];
}
