import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

interface Item {
  url: string;
  description: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './bs-photos.component.html',
  styleUrls: ['./bs-photos.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 })),
      ]),
    ]),
  ],
})
export class BsPhotosComponent implements OnInit {
  galleryData: Item[] = [
    {
      url: '../../assets/images/photos/Hotel_Beau_Doble_clasica.jpg',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Doble_Superior.jpg',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_BARRA.jpg',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_Classic.jpg',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_Decoracion.jpg',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_DestacadoH.jpg',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/rooms/rooms_premium1.jpg',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_Terraza2.jpg',
      description: 'Hotel Beau-Site picture',
    },
  ];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() {}

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
    document.addEventListener('keydown', (event) => {
      const nomTouche = event.key;
      if (nomTouche === 'ArrowRight') this.next();
      if (nomTouche === 'ArrowLeft') this.prev();
      if (nomTouche === 'Escape') this.onClosePreview();
      if (nomTouche === 'Enter') this.onPreviewImage(0);
    });
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.galleryData.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.galleryData.length - 1;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
}
