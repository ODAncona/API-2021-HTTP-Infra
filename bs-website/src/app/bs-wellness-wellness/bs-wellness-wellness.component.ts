import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-wellness-wellness',
  templateUrl: './bs-wellness-wellness.component.html',
  styleUrls: ['./bs-wellness-wellness.component.scss'],
})
export class BsWellnessWellnessComponent {
  constructor() { }
  massages: any = [
    { name: $localize`Back Massage`, price: '	30min 60.- // 60min 110.-' },
    { name: $localize`Full Body Massage`, price: '60min 110.- 90min // 160.-' },
    { name: $localize`Head & Face Massage`, price: '25min 50.- // 45min 80.-' },
    { name: $localize`Hot Stone Massage`, price: '30min 75.- // 60min 140.-' },
    { name: $localize`Foot Massage`, price: '30min 60.- ' },
    {
      name: $localize`Foot Massage + Peeling + Mask`,
      price: '60min 130.-',
    },
    { name: $localize`Manual Lymphatic Drainage: `, price: '30min 60.- // 60min 110.-' },
  ];
}
