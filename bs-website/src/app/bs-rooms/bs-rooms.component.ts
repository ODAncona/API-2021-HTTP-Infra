import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Room } from '../interface';
@Component({
  selector: 'app-bs-rooms',
  templateUrl: './bs-rooms.component.html',
  styleUrls: ['./bs-rooms.component.scss'],
})
export class BsRoomsComponent {
  s: any = {
    bathub: $localize`Bathub`,
    bathrobe: $localize`Bathrobe`,
    bathSplippers: $localize`Bath Slippers`,
    shower: $localize`Shower`,
    bathArticle: $localize`Bathing Articles`,
    airdryer: $localize`Airdryer`,
    safe: $localize`Safe`,
    minibar: $localize`Minibar`,
    tea: $localize`Tea with Kettle`,
    tv: $localize`LCD TV`,
    radio: $localize`Radio`,
    telephone: $localize`Telephone`,
    wifi: $localize`Wi-Fi Connexion`,
    northBalcon: $localize`North Balcon`,
    eastBalcon: $localize`East Balcon`,
    southBalcon: $localize`South Balcon`,
    westBalcon: $localize`West Balcon`,
    writingDesk: $localize`Writing Desk`,
    sitting: $localize`Sitting Area`,
    southTerrace: $localize`South Terrace`,
  };
  rooms: Room[] = [
    {
      title: $localize`Comfortable Double Room`,
      images: ['../../assets/images/rooms/comfortable_1.webp'],
      services: [
        { name: this.s.shower },
        { name: this.s.bathrobe },
        { name: this.s.bathSplippers },
        { name: this.s.bathArticle },
        { name: this.s.airdryer },
        { name: this.s.safe },
        { name: this.s.minibar },
        { name: this.s.tea },
        { name: this.s.tv },
        { name: this.s.radio },
        { name: this.s.telephone },
        { name: this.s.wifi },
        { name: this.s.southTerrace },
      ],
      description: $localize`Our Comfortable Double rooms feature a small terrace with a partial view on the mountains.`,
      roomSize: '20',
    },
    {
      title: $localize`Cosy Double Room`,
      images: [
        '../../assets/images/rooms/cozy_1.webp',
        '../../assets/images/rooms/cozy_2.webp',
      ],
      services: [
        { name: this.s.bathub },
        { name: this.s.bathrobe },
        { name: this.s.bathSplippers },
        { name: this.s.shower },
        { name: this.s.bathArticle },
        { name: this.s.airdryer },
        { name: this.s.safe },
        { name: this.s.minibar },
        { name: this.s.tea },
        { name: this.s.tv },
        { name: this.s.radio },
        { name: this.s.telephone },
        { name: this.s.wifi },
        { name: this.s.northBalcon },
      ],
      description: $localize`These rooms feature a balcony on the village side, with a view towards the Tschentenalp.`,
      roomSize: '20',
    },
    {
      title: $localize`Superior Double Room`,
      images: [
        '../../assets/images/rooms/superior_1.webp',
        '../../assets/images/rooms/superior_2.webp',
        '../../assets/images/rooms/superior_3.webp',
      ],
      services: [
        { name: this.s.bathub },
        { name: this.s.bathrobe },
        { name: this.s.bathSplippers },
        { name: this.s.shower },
        { name: this.s.bathArticle },
        { name: this.s.airdryer },
        { name: this.s.safe },
        { name: this.s.minibar },
        { name: this.s.tea },
        { name: this.s.tv },
        { name: this.s.radio },
        { name: this.s.telephone },
        { name: this.s.wifi },
        { name: this.s.writingDesk },
        { name: this.s.sitting },
        { name: this.s.westBalcon },
      ],
      description: $localize`These rooms feature a balcony towards the east, partially with a view on the mountains. They are also suitable for 3 persons with a sofa bed.`,
      roomSize: '28',
    },
    {
      title: $localize`Premium Double Room - Panoramic View`,
      images: [
        '../../assets/images/rooms/premium_1.webp',
        '../../assets/images/rooms/premium_2.webp',
        '../../assets/images/rooms/premium_3.webp',
        '../../assets/images/rooms/premium_4.webp',
        '../../assets/images/rooms/premium_5.webp',
        '../../assets/images/rooms/premium_6.webp',
        '../../assets/images/rooms/premium_7.webp',
        '../../assets/images/rooms/premium_8.webp',
      ],
      services: [
        { name: this.s.bathub },
        { name: this.s.bathrobe },
        { name: this.s.bathSplippers },
        { name: this.s.shower },
        { name: this.s.bathArticle },
        { name: this.s.airdryer },
        { name: this.s.safe },
        { name: this.s.minibar },
        { name: this.s.tea },
        { name: this.s.tv },
        { name: this.s.radio },
        { name: this.s.telephone },
        { name: this.s.wifi },
        { name: this.s.writingDesk },
        { name: this.s.sitting },
        { name: this.s.southBalcon },
      ],
      description: $localize`These rooms offer a splendid view of the Adelboden mountain panorama. From the balcony you can enjoy the panoramic view spanning from the Bunderspitz passing over the Lohner mountain to the Wildstubel and Engstligen Falls.`,
      roomSize: '28',
    },
    {
      title: $localize`Junior Suite
      `,
      images: [
        '../../assets/images/rooms/junior_1.webp',
        '../../assets/images/rooms/junior_2.webp',
        '../../assets/images/rooms/junior_3.webp',
        '../../assets/images/rooms/junior_4.webp',
        '../../assets/images/rooms/junior_5.webp',
        '../../assets/images/rooms/junior_6.webp',
        '../../assets/images/rooms/junior_7.webp',
      ],
      services: [
        { name: this.s.bathub },
        { name: this.s.bathrobe },
        { name: this.s.bathSplippers },
        { name: this.s.shower },
        { name: this.s.bathArticle },
        { name: this.s.airdryer },
        { name: this.s.safe },
        { name: this.s.minibar },
        { name: this.s.tea },
        { name: this.s.tv },
        { name: this.s.radio },
        { name: this.s.telephone },
        { name: this.s.wifi },
        { name: this.s.writingDesk },
        { name: this.s.sitting },
        { name: this.s.northBalcon },
      ],
      description: $localize`These rooms are ideal for a family stay. They feature a gallery with a double bed, perfectly suited for 4 persons. The balcony is on the north side towards the village with a view towards the Tschentenalp.`,
      roomSize: '32, 39',
    },
    {
      title: $localize`Junior Suite - Panoramic View`,
      images: [
        '../../assets/images/rooms/junior_1.webp',
        '../../assets/images/rooms/junior_2.webp',
        '../../assets/images/rooms/junior_3.webp',
        '../../assets/images/rooms/junior_4.webp',
        '../../assets/images/rooms/junior_5.webp',
        '../../assets/images/rooms/junior_6.webp',
        '../../assets/images/rooms/junior_7.webp',
      ],
      services: [
        { name: this.s.bathub },
        { name: this.s.bathrobe },
        { name: this.s.bathSplippers },
        { name: this.s.shower },
        { name: this.s.bathArticle },
        { name: this.s.airdryer },
        { name: this.s.safe },
        { name: this.s.minibar },
        { name: this.s.tea },
        { name: this.s.tv },
        { name: this.s.radio },
        { name: this.s.telephone },
        { name: this.s.wifi },
        { name: this.s.writingDesk },
        { name: this.s.sitting },
        { name: this.s.southBalcon },
      ],
      description: $localize`These rooms are ideal for a family stay. They feature a gallery with a double bed, perfectly suited for 4 persons. From the balcony you can enjoy the panoramic view spanning from the Bunderspitz passing over the Lohner mountain to the Wildstubel and Engstligen Falls.`,
      roomSize: '32, 39',
    },
  ];
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.animation = false;
  }
}
