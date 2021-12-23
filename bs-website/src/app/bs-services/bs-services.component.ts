import { Component, OnInit } from '@angular/core';
import { Service } from '../interface';

@Component({
  selector: 'app-bs-services',
  templateUrl: './bs-services.component.html',
  styleUrls: ['./bs-services.component.scss']
})
export class BsServicesComponent implements OnInit {
  services: Service[] = [
    { icon: 'fa-bread-slice fa-fw', name: 'Bar-Cafétéria' },
    { icon: 'fa-hand-sparkles fa-fw', name: 'Conciergerie' },
    { icon: 'fa-parking fa-fw', name: 'Parking couvert' },
    { icon: 'fa-soap fa-fw', name: 'Blanchisserie & pressing' },
    { icon: 'fa-pump-soap fa-fw', name: 'Produits de beauté' },
    { icon: 'fa-glass-cheers fa-fw', name: 'Minibar' },
    { icon: 'fa-tv fa-fw', name: 'Télévision' },
    { icon: 'fa-money-bill-wave fa-fw', name: 'Bureau de change' },
    { icon: 'fa-luggage-cart fa-fw', name: 'Consigne bagages' },
    { icon: 'fa-utensils fa-fw', name: 'Restaurant' },
    { icon: 'fa-wifi fa-fw', name: 'Connexion Internet' },
    { icon: 'fa-door-closed fa-fw', name: 'Coffre-fort' },
    { icon: 'fa-wind fa-fw', name: 'Sèche-cheveux' },
    { icon: 'fa-coffee fa-fw', name: 'Plateau de courtoisie' },
    { icon: 'fa-utensils fa-fw', name: 'Petit-déjeûner buffet' },
    { icon: 'fa-concierge-bell fa-fw', name: 'Service de chambre' },
    { icon: 'fa-snowflake fa-fw', name: 'Climatisation' },
    { icon: 'fa-chalkboard fa-fw', name: 'Bureau' },
    { icon: 'fa-phone fa-fw', name: 'Téléphone' },
    { icon: 'fa-spa fa-fw', name: 'SPA' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
