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
      url: '../../assets/images/photos/photo1.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo2.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo3.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo4.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo5.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo6.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo7.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo8.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo9.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo10.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo11.webp',

      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo12.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo13.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo14.webp',

      description: 'Hotel Beau-Site picture',
    },
    {


      url: '../../assets/images/photos/photo15.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo16.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo17.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo18.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo19.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo20.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo21.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo22.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo23.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo24.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo25.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo26.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo27.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo28.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo29.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo30.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo31.webp',
      description: 'Hotel Beau-Site picture',
    },
    {
      url: '../../assets/images/photos/photo32.webp',
      description: 'Hotel Beau-Site picture',
    }
  ];

  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() { }

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
