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
      title: 'Rooms',
      url: '/rooms',
      img: '../../assets/images/photos/slide_home1.jpg',
    },
    {
      title: 'Restaurant',
      url: '/restaurant',
      img: '../../assets/images/photos/slide_home1.jpg',
    },
    {
      title: 'Promotions',
      url: '/promotion',
      img: '../../assets/images/photos/slide_home1.jpg',
    },
    {
      title: 'Wellness-Fitness',
      url: '/wellness',
      img: '../../assets/images/photos/slide_home1.jpg',
    },
    {
      title: 'Region',
      url: '/region',
      img: '../../assets/images/photos/slide_home1.jpg',
    },
    {
      title: 'Team',
      url: '/team',
      img: '../../assets/images/photos/slide_home1.jpg',
    },
  ];
}
