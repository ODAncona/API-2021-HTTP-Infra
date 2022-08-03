import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bs-photos-slideshow',
  templateUrl: './bs-photos-slideshow.component.html',
  styleUrls: ['./bs-photos-slideshow.component.scss'],
})
export class BsPhotosSlideshowComponent implements OnInit {
  images: any[] = [
    {
      url: '../../assets/images/photos/Hotel_Beau_Doble_clasica.jpg',
      description: 'Description incroyable',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Doble_Superior.jpg',
      description: 'Description incroyable',
    },
    {
      url: '../../assets/images/photos/fitness_machines.jpg',
      description: 'Description incroyable',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_BARRA.jpg',
      description: 'Description incroyable',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_Classic.jpg',
      description: 'Description incroyable',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_Decoracion.jpg',
      description: 'Description incroyable',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_DestacadoH.jpg',
      description: 'Description incroyable',
    },
    {
      url: '../../assets/images/photos/rooms/rooms_premium1.jpg',
      description: 'Description incroyable',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_Terraza2.jpg',
      description: 'Description incroyable',
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.pauseOnFocus = false;
    config.animation = true;
  }

  ngOnInit(): void {
    document.getElementById('carousel')?.focus();
  }
}
