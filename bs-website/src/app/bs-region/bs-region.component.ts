import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-region',
  templateUrl: './bs-region.component.html',
  styleUrls: ['./bs-region.component.scss'],
})
export class BsRegionComponent implements OnInit {
  benefits: any[] = [
    {
      title: 'MySwitzerland.com',
      url: 'https://www.myswitzerland.com/en-ch/destinations/adelboden/',
      img: '../../assets/images/photos/home_village.jpg',
    },
    {
      title: 'Adelboden.ch',
      url: 'https://adelboden.ch/de/',
      img: '../../assets/images/photos/home_village.jpg',
    },
    {
      title: 'Meine-Berge.ch',
      url: 'https://meine-berge.ch/en/',
      img: '../../assets/images/photos/home_village.jpg',
    },
  ];
  summer: any[] = [
    {
      title: 'BIKING',
      description: $localize`Set off on two wheels and you are quickly heading for a completely new mountain experience. Experienced professionals, practice areas, and rental equipment are available to ensure you get the best possible start. Mountain bikers and seasoned cyclists have long been riding the challenging trails and long leisurely distances in the great outdoors.`,
      link: 'https://meine-berge.ch/en/biking/',
    },
    {
      title: 'HIKING',
      description: $localize`Where better to broaden your horizons than in the Bernese Alps? The view sweeps serenely over peaks and gorges, and the longing to take big steps into the unknown increases.Planned hikes are also an option as there is no shortage of longer tours and places to stay along your chosen route.`,
      link: 'https://meine-berge.ch/en/hiking/',
    },
    {
      title: 'TRAMPOLINE',
      description: $localize`During the summer holidays open daily from 11 a.m.to 4 p.m.!`,
      link: 'https://en.tschentenalp.ch/trampolinpark',
    },
    {
      title: 'AVENTURE PARK',
      description: $localize`Swing through the air like Tarzan, let your adrenaline rush when abseiling from a bridge, glide over the river at top speed on a cable car and, last but not least, dare a huge pendulum swing? This is what awaits you in the Adventure Park - Adelboden.`,
      link: 'https://www.alpinschule-adelboden.ch/adventurepark',
    },
    {
      title: 'SCOOTERS',
      description: $localize`If you like action, explore the impressive alpine world with a scooter.The mile - long, varied routes are waiting to be discovered.`,
      link: 'https://meine-berge.ch/en/scooters/',
    },
    {
      title: 'PARAGLIDING',
      description: $localize`Paragliding in all its facets.We offer you a wide range of airy experiences, from simple adventure flights to full - day paragliding adventures.`,
      link: 'https://paragliding-kandertal.ch/en/tandemfluege/',
    },
    {
      title: 'SWIMMING',
      description: $localize`Legendary architecture with panoramic views.Under the alpine sun, the water of the 50 - metre Gruebi pool glistens seductively.On the other hand, when the sky is grey, a trip to indoor swimming pools at the Sportzentrum in Frutigen is a great alternative.`,
      link: 'https://adelboden.ch/fr/piscines/',
    },
    {
      title: 'BLAUSEE',
      description: $localize`A warm welcome to our little paradise in the midst of the Kandertal mountains.The Blausee brand stands for uniqueness from start to finish.Hospitality is part of our mission so you can indulge all your senses with us.The Blausee is considered a place of power - one where you can relax and enjoy nature at its best.`,
      link: 'https://www.blausee.ch/en/',
    },
    {
      title: 'CLIMBING AND VIA FERRATA',
      description: $localize`Courage, concentration, a head for heights and physical strength are all needed when you are moving in a vertical direction.However, the right equipment is just as crucial for visitors when climbing.Fortunately, the mountain guides and climbing supervisors at Adelboden - Lenk - Kandersteg have well - padded mats, deeply anchored hooks and tightly stretched ropes to hand.This allows you to practise manoeuvres and enjoy views that would otherwise only be possible for expert climbers on high alpine tours.`,
      link: 'https://meine-berge.ch/en/climbing-via-ferrata'
    }
  ];

  winter: any[] = [
    {
      title: 'SKI & SNOWBOARD',
      description: $localize`Adelboden - Lenk has earned its reputation as a top ski resort over many decades.Events like the Ski World Cup at Chuenisbärgli or the professional services offered by the snowsports schools are now well - respected winter institutions.But alpine winter traditions are lived very much in the present.Specialist teams prepare the various slopes with great care each day`,
      link: 'https://adelboden.ch/en/ski-snowboard/',
    },
    {
      title: 'FREERIDE',
      description: $localize`"The joy is in having the time to forget time..." ... and limitless freedom to enjoy under the professional supervision of our sports instructors.It\'s a fantastic feeling making those first tracks in deep, freshly fallen snow. Experience a pure, natural world far from the heavy traffic on the piste and in no time the stresses of everyday life will seem miles away. Activities and prices are based on those for individual tuition.`,
      link: 'https://meine-berge.ch/en/skiing/',
    },
    {
      title: 'SNOWSHOEING',
      description: $localize`Snowshoeing is one of the many traditions, still cultivated in Adelboden. Discover peaceful and secluded corners, far away from the crowds.`,
      link: 'https://adelboden.ch/en/snowshoeing',
    },
    {
      title: 'ICE CLIMBING',
      description: $localize`Immerse yourself in a world of icicles. What could be cooler than a frozen waterfall? Ice climbing, the fascinating sport in the world of waterfalls and icicles. Here we show you how to move safely in the ice. `,
      link: 'https://www.alpinschule-adelboden.ch/de/Winter/Eisklettern',
    },
    {
      title: 'SLEDGING',
      description: $localize`Please remain seated. In Adelboden, sledge runners are certainly a match for skis. Dozens of miles of trails carry riders through forests and over icing-sugar-coated meadows.`,
      link: 'https://adelboden.ch/en/sledging/',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
