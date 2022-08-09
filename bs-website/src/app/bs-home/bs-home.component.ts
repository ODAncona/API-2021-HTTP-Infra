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
    '../../assets/images/photos/slide_home1.jpg',
    '../../assets/images/photos/Hotel_Beau_Suiza_SlideHome1.jpg',
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
      description: $localize`Discover`
    },
    {
      title: $localize`Restaurant`,
      url: '/restaurant',
      img: '../../assets/images/home/card_restaurant.webp',
      description: $localize`Delight yourself`
    },
    {
      title: $localize`Promotions`,
      url: '/promotion',
      img: '../../assets/images/home/card_promotions.webp',
      description: $localize`Discover `
    },
    {
      title: $localize`Fitness & Wellness`,
      url: '/wellness',
      img: '../../assets/images/home/card_wellness_fitness.webp',
      description: $localize`Come and relax`
    },
    {
      title: $localize`Region`,
      url: '/region',
      img: '../../assets/images/home/card_region.webp',
      description: $localize``
    },
    {
      title: $localize`Team`,
      url: '/team',
      img: '../../assets/images/home/card_team.webp',
      description: $localize``
    },
  ];
}
