import { Component, OnInit } from '@angular/core';
import { Room } from '../interface';
@Component({
  selector: 'app-bs-rooms',
  templateUrl: './bs-rooms.component.html',
  styleUrls: ['./bs-rooms.component.scss']
})
export class BsRoomsComponent implements OnInit {
  rooms: Room[] = [
    {
      title: 'Standard ',
      subtitle: 'Budget',
      images: [
        '../../assets/images/photos/rooms/rooms_standard1.jpg',
        '../../assets/images/photos/rooms/rooms_standard2.jpg',
        '../../assets/images/photos/rooms/rooms_standard3.jpg',
      ],
      services: [
        { icon: 'fa-bread-slice fa-fw', name: 'Bar-Cafétéria' },
        { icon: 'fa-hand-sparkles fa-fw', name: 'Conciergerie' },
        { icon: 'fa-parking fa-fw', name: 'Parking couvert' }],
      description: '7 nuits dans chambre double charme, petit déjeuner, demi-pension, 1 soirée fondue chinoise, le centre bien-être, la salle de musculation ,baignoire.'
    },
    {
      title: 'classic',
      subtitle: 'Familia',
      images: [
        '../../assets/images/photos/rooms/rooms_classic1.jpg',
        '../../assets/images/photos/rooms/rooms_classic2.jpg',
        '../../assets/images/photos/rooms/rooms_classic3.jpg',
      ],
      services: [
        { icon: 'fa-tv fa-fw', name: 'Télévision' },
        { icon: 'fa-money-bill-wave fa-fw', name: 'Bureau de change' },
        { icon: 'fa-luggage-cart fa-fw', name: 'Consigne bagages' },
        { icon: 'fa-utensils fa-fw', name: 'Restaurant' },
        { icon: 'fa-wifi fa-fw', name: 'Connexion Internet' },
        { icon: 'fa-door-closed fa-fw', name: 'Coffre-fort' },
        { icon: 'fa-wind fa-fw', name: 'Sèche-cheveux' },
      ],
      description: 'Small double budget room with shower.'
    },
    {
      title: 'Superior',
      subtitle: 'Easy',
      images: [
        '../../assets/images/photos/rooms/rooms_superior1.jpg',
        '../../assets/images/photos/rooms/rooms_superior2.jpg',
        '../../assets/images/photos/rooms/rooms_superior3.jpg',
      ],
      services: [
        { icon: 'fa-tv fa-fw', name: 'Télévision' },
        { icon: 'fa-money-bill-wave fa-fw', name: 'Bureau de change' },
        { icon: 'fa-luggage-cart fa-fw', name: 'Consigne bagages' },
        { icon: 'fa-utensils fa-fw', name: 'Restaurant' },
        { icon: 'fa-wifi fa-fw', name: 'Connexion Internet' },
        { icon: 'fa-door-closed fa-fw', name: 'Coffre-fort' },
        { icon: 'fa-wind fa-fw', name: 'Sèche-cheveux' },
      ],
      description: 'Family suite with 1 double with bath/wc on the south side and a connecting small room for two children with shower.'
    },
    {
      title: 'Premium',
      subtitle: 'Charme',
      images: [
        '../../assets/images/photos/rooms/rooms_premium1.jpg',
        '../../assets/images/photos/rooms/rooms_premium2.jpg',
        '../../assets/images/photos/rooms/rooms_premium3.jpg',
      ],
      services: [
        { icon: 'fa-tv fa-fw', name: 'Télévision' },
        { icon: 'fa-money-bill-wave fa-fw', name: 'Bureau de change' },
        { icon: 'fa-luggage-cart fa-fw', name: 'Consigne bagages' },
        { icon: 'fa-utensils fa-fw', name: 'Restaurant' },
        { icon: 'fa-wifi fa-fw', name: 'Connexion Internet' },
        { icon: 'fa-door-closed fa-fw', name: 'Coffre-fort' },
        { icon: 'fa-wind fa-fw', name: 'Sèche-cheveux' },
      ],
      description: 'Chambre individuelle avec bain/douche/WC, sèche cheveux, lit jumaux ou grand lit, machine pour faire du café et du thé, coffre, minibar et balcon côté nord.'
    },
    {
      title: 'Junior Suite',
      subtitle: 'Charme',
      images: [
        '../../assets/images/photos/rooms/rooms_junior_suite1.jpg',
        '../../assets/images/photos/rooms/rooms_junior_suite2.jpg',
        '../../assets/images/photos/rooms/rooms_junior_suite3.jpg',
      ],
      services: [
        { icon: 'fa-tv fa-fw', name: 'Télévision' },
        { icon: 'fa-money-bill-wave fa-fw', name: 'Bureau de change' },
        { icon: 'fa-luggage-cart fa-fw', name: 'Consigne bagages' },
        { icon: 'fa-utensils fa-fw', name: 'Restaurant' },
        { icon: 'fa-wifi fa-fw', name: 'Connexion Internet' },
        { icon: 'fa-door-closed fa-fw', name: 'Coffre-fort' },
        { icon: 'fa-wind fa-fw', name: 'Sèche-cheveux' },
      ],
      description: 'Chambre individuelle avec bain/douche/WC, sèche cheveux, lit jumaux ou grand lit, machine pour faire du café et du thé, coffre, minibar et balcon côté nord.'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
