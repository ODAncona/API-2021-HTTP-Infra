import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Room } from '../interface';
@Component({
  selector: 'app-bs-rooms',
  templateUrl: './bs-rooms.component.html',
  styleUrls: ['./bs-rooms.component.scss'],
})
export class BsRoomsComponent {
  rooms: Room[] = [
    {
      title: 'Comfortable Double Room',
      images: [
        '../../assets/images/rooms/comfortable_1.jpg',
        '../../assets/images/rooms/comfortable_2.jpg',
      ],
      services: [
        { name: 'Bar-Cafétéria' },
        { name: 'Conciergerie' },
        { name: 'Parking couvert' },
      ],
      description: $localize`The Comfortable double rooms have a small terrace, some with a view of the mountains.`,
      roomSize: '20',
    },
    {
      title: 'Cozy Double Room',
      images: [
        '../../assets/images/rooms/cozy_1.jpg',
        '../../assets/images/rooms/cozy_2.jpg',
      ],
      services: [
        { name: 'Télévision' },
        { name: 'Bureau de change' },
        { name: 'Consigne bagages' },
        { name: 'Restaurant' },
        { name: 'Connexion Internet' },
        { name: 'Coffre-fort' },
        { name: 'Sèche-cheveux' },
      ],
      description: $localize`These rooms have a balcony facing the village street, with a view of the Tschentenalp.`,
      roomSize: '20',
    },
    {
      title: 'Superior Double Room',
      images: [
        '../../assets/images/rooms/superior_1.jpg',
        '../../assets/images/rooms/superior_2.jpg',
        '../../assets/images/rooms/superior_3.jpg',
      ],
      services: [
        { name: 'Télévision' },
        { name: 'Bureau de change' },
        { name: 'Consigne bagages' },
        { name: 'Restaurant' },
        { name: 'Connexion Internet' },
        { name: 'Coffre-fort' },
        { name: 'Sèche-cheveux' },
      ],
      description: $localize`These rooms have a balcony facing east, some with a view of the mountains. They are also suitable as triple rooms, with a sofa bed.`,
      roomSize: '28',
    },
    {
      title: 'Premium Double Room',
      images: [
        '../../assets/images/rooms/premium_1.jpg',
        '../../assets/images/rooms/premium_2.jpg',
        '../../assets/images/rooms/premium_3.jpg',
        '../../assets/images/rooms/premium_4.jpg',
        '../../assets/images/rooms/premium_5.jpg',
        '../../assets/images/rooms/premium_6.jpg',
        '../../assets/images/rooms/premium_7.jpg',
        '../../assets/images/rooms/premium_8.jpg',
        '../../assets/images/rooms/premium_9.jpg',
      ],
      services: [
        { name: 'Télévision' },
        { name: 'Bureau de change' },
        { name: 'Consigne bagages' },
        { name: 'Restaurant' },
        { name: 'Connexion Internet' },
        { name: 'Coffre-fort' },
        { name: 'Sèche-cheveux' },
      ],
      description: $localize`These rooms have a wonderful view of the Adelboden mountain panorama. On the balcony you can enjoy the view to the Bunderspitz over the Lohnermassiv to the Wildstrubel and the Engstligen Falls.`,
      roomSize: '28',
    },
    {
      title: 'Junior Suite',
      images: [
        '../../assets/images/rooms/junior_1.jpg',
        '../../assets/images/rooms/junior_2.jpg',
        '../../assets/images/rooms/junior_3.jpg',
        '../../assets/images/rooms/junior_4.jpg',
        '../../assets/images/rooms/junior_5.jpg',
        '../../assets/images/rooms/junior_6.jpg',
        '../../assets/images/rooms/junior_7.jpg',
      ],
      services: [
        { name: 'Télévision' },
        { name: 'Bureau de change' },
        { name: 'Consigne bagages' },
        { name: 'Restaurant' },
        { name: 'Connexion Internet' },
        { name: 'Coffre-fort' },
        { name: 'Sèche-cheveux' },
      ],
      description: $localize`These rooms are very suitable for families. They have a gallery with a double bed and are ideal for four people. The balcony faces north towards the village street with a view of the Tschentenalp.`,
      roomSize: '32, 39',
    },
  ];
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.animation = false;
  }
}
