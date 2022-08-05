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

  cards:any[] = [
    {
      title: "Rooms",
      url:"/rooms"
    },
    {
      title: "Restaurant",
      url:"/restaurant"
    },
    {
      title: "Promotions",
      url:"/promotion"
    },
    {
      title: "Wellness-Fitness",
      url:"/wellness"
    },
    {
      title: "Region",
      url:"/region"
    },
    {
      title: "Team",
      url:"/team"
    },
  ]
}
