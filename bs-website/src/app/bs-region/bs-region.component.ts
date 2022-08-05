import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-region',
  templateUrl: './bs-region.component.html',
  styleUrls: ['./bs-region.component.scss'],
})
export class BsRegionComponent implements OnInit {
  summer: any[] = [
    {
      title: 'BIKING',
      description:
        'Set off on two wheels and you are quickly heading for a completely new mountain experience. Experienced professionals, practice areas, and rental equipment are available to ensure you get the best possible start. Mountain bikers and seasoned cyclists have long been riding the challenging trails and long leisurely distances in the great outdoors.',
    },
    {
      title: 'HIKING',
      description:
        'Where better to broaden your horizons than in the Bernese Alps? The view sweeps serenely over peaks and gorges, and the longing to take big steps into the unknown increases. Planned hikes are also an option as there is no shortage of longer tours and places to stay along your chosen route.',
    },
  ];

  winter: any[] = [
    {
      title: 'SKI & SNOWBOARD',
      description:
        'A love for the slopes can take many forms and this is entirely fulfilled at Adelboden-Lenk-Kandersteg. Families, freestylers and FIS track riders will all find their favourite piste or trail here.',
    },
    {
      title: 'Freeride',
      description: '"The joy is in having the time to forget time..." ... and limitless freedom to enjoy under the professional supervision of our sports instructors.It\'s a fantastic feeling making those first tracks in deep, freshly fallen snow. Experience a pure, natural world far from the heavy traffic on the piste and in no time the stresses of everyday life will seem miles away. Activities and prices are based on those for individual tuition.'
    },
    {
      title: 'LUGE',
      description: ''
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
