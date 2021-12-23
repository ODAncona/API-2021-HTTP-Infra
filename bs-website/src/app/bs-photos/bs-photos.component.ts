import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-photos',
  templateUrl: './bs-photos.component.html',
  styleUrls: ['./bs-photos.component.scss']
})
export class BsPhotosComponent implements OnInit {
  images: any[] = [
    { url: "../../assets/images/photos/Hotel_Beau_Doble_clasica.jpg", description: "Description incroyable" },
    { url: "../../assets/images/photos/Hotel_Beau_Doble_Superior.jpg", description: "Description incroyable" },
    { url: "../../assets/images/photos/fitness_machines.jpg", description: "Description incroyable" },
    { url: "../../assets/images/photos/Hotel_Beau_Suiza_BARRA.jpg", description: "Description incroyable" },
    { url: "../../assets/images/photos/Hotel_Beau_Suiza_Classic.jpg", description: "Description incroyable" },
    { url: "../../assets/images/photos/Hotel_Beau_Suiza_Decoracion.jpg", description: "Description incroyable" },
    { url: "../../assets/images/photos/Hotel_Beau_Suiza_DestacadoH.jpg", description: "Description incroyable" },
    { url: "../../assets/images/photos/rooms/rooms_premium1.jpg", description: "Description incroyable" },
    { url: "../../assets/images/photos/Hotel_Beau_Suiza_Terraza2.jpg", description: "Description incroyable" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
