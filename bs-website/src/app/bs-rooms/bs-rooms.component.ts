import { Component } from '@angular/core';
import { Room } from '../interface';
@Component({
  selector: 'app-bs-rooms',
  templateUrl: './bs-rooms.component.html',
  styleUrls: ['./bs-rooms.component.scss'],
})
export class BsRoomsComponent {
  rooms: Room[] = [
    {
      title: 'Basic Double Room',
      images: [
        '../../assets/images/photos/rooms/rooms_standard1.jpg',
        '../../assets/images/photos/rooms/rooms_standard2.jpg',
        '../../assets/images/photos/rooms/rooms_standard3.jpg',
      ],
      services: [
        { icon: 'home', name: 'Bar-Cafétéria' },
        { icon: 'home', name: 'Conciergerie' },
        { icon: 'home', name: 'Parking couvert' },
      ],
      description:
        'The Basic double rooms have a small terrace, some with a view of the mountains.',
      roomSize: '20',
    },
    {
      title: 'Classic Double Room',
      images: [
        '../../assets/images/photos/rooms/rooms_classic1.jpg',
        '../../assets/images/photos/rooms/rooms_classic2.jpg',
        '../../assets/images/photos/rooms/rooms_classic3.jpg',
      ],
      services: [
        { icon: 'home', name: 'Télévision' },
        { icon: 'home', name: 'Bureau de change' },
        { icon: 'home', name: 'Consigne bagages' },
        { icon: 'home', name: 'Restaurant' },
        { icon: 'home', name: 'Connexion Internet' },
        { icon: 'home', name: 'Coffre-fort' },
        { icon: 'home', name: 'Sèche-cheveux' },
      ],
      description:
        'These rooms have a balcony facing the village street, with a view of the Tschentenalp.',
      roomSize: '20',
    },
    {
      title: 'Superior Double Room',
      images: [
        '../../assets/images/photos/rooms/rooms_superior1.jpg',
        '../../assets/images/photos/rooms/rooms_superior2.jpg',
        '../../assets/images/photos/rooms/rooms_superior3.jpg',
      ],
      services: [
        { icon: 'home', name: 'Télévision' },
        { icon: 'home', name: 'Bureau de change' },
        { icon: 'home', name: 'Consigne bagages' },
        { icon: 'home', name: 'Restaurant' },
        { icon: 'home', name: 'Connexion Internet' },
        { icon: 'home', name: 'Coffre-fort' },
        { icon: 'home', name: 'Sèche-cheveux' },
      ],
      description:
        'These rooms have a balcony facing east, some with a view of the mountains. They are also suitable as triple rooms, with a sofa bed.',
      roomSize: '28',
    },
    {
      title: 'Premium Double Room',
      images: [
        '../../assets/images/photos/rooms/rooms_premium1.jpg',
        '../../assets/images/photos/rooms/rooms_premium2.jpg',
        '../../assets/images/photos/rooms/rooms_premium3.jpg',
      ],
      services: [
        { icon: 'home', name: 'Télévision' },
        { icon: 'home', name: 'Bureau de change' },
        { icon: 'home', name: 'Consigne bagages' },
        { icon: 'home', name: 'Restaurant' },
        { icon: 'home', name: 'Connexion Internet' },
        { icon: 'home', name: 'Coffre-fort' },
        { icon: 'home', name: 'Sèche-cheveux' },
      ],
      description:
        'These rooms have a wonderful view of the Adelboden mountain panorama. On the balcony you can enjoy the view to the Bunderspitz over the Lohnermassiv to the Wildstrubel and the Engstligen Falls.',
      roomSize: '28',
    },
    {
      title: 'Junior Suite',
      images: [
        '../../assets/images/photos/rooms/rooms_junior_suite1.jpg',
        '../../assets/images/photos/rooms/rooms_junior_suite2.jpg',
        '../../assets/images/photos/rooms/rooms_junior_suite3.jpg',
      ],
      services: [
        { icon: 'home', name: 'Télévision' },
        { icon: 'home', name: 'Bureau de change' },
        { icon: 'home', name: 'Consigne bagages' },
        { icon: 'home', name: 'Restaurant' },
        { icon: 'home', name: 'Connexion Internet' },
        { icon: 'home', name: 'Coffre-fort' },
        { icon: 'home', name: 'Sèche-cheveux' },
      ],
      description:
        'These rooms are very suitable for families. They have a gallery with a double bed and are ideal for four people. The balcony faces north towards the village street with a view of the Tschentenalp.',
      roomSize: '32, 39',
    },
  ];
  constructor() {}
}
