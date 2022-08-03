import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-team',
  templateUrl: './bs-team.component.html',
  styleUrls: ['./bs-team.component.scss'],
})
export class BsTeamComponent implements OnInit {
  workers: any[] = [
    {
      url: '../../assets/images/photos/Hotel_Beau_Doble_clasica.jpg',
      description: 'Description incroyable',
      name: 'Hans Peter',
      work: 'gastgeber',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Doble_Superior.jpg',
      description: 'Description incroyable',
      name: 'Hans Peter',
      work: 'gastgeber',
    },
    {
      url: '../../assets/images/photos/fitness_machines.jpg',
      description: 'Description incroyable',
      name: 'Hans Peter',
      work: 'gastgeber',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_BARRA.jpg',
      description: 'Description incroyable',
      name: 'Hans Peter',
      work: 'gastgeber',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_Classic.jpg',
      description: 'Description incroyable',
      name: 'Hans Peter',
      work: 'gastgeber',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_Decoracion.jpg',
      description: 'Description incroyable',
      name: 'Hans Peter',
      work: 'gastgeber',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_DestacadoH.jpg',
      description: 'Description incroyable',
      name: 'Hans Peter',
      work: 'gastgeber',
    },
    {
      url: '../../assets/images/photos/rooms/rooms_premium1.jpg',
      description: 'Description incroyable',
      name: 'Hans Peter',
      work: 'gastgeber',
    },
    {
      url: '../../assets/images/photos/Hotel_Beau_Suiza_Terraza2.jpg',
      description: 'Description incroyable',
      name: 'Hans Peter',
      work: 'gastgeber',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
