import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-wellness-wellness',
  templateUrl: './bs-wellness-wellness.component.html',
  styleUrls: ['./bs-wellness-wellness.component.scss'],
})
export class BsWellnessWellnessComponent {
  constructor() {}
  massages: any = [
    { name: 'Back Massage', price: '	30min 60.- // 60min 110.-' },
    { name: 'Full Body Massage', price: '60min 110.- 90min // 160.-' },
    { name: 'Head & Face: Massage', price: '25min 50.- // 45min 80.-' },
    { name: 'Hot Stone Massage', price: '30min 75.- // 60min 140.-' },
    { name: 'Foot Massage: ', price: '30min 60.- ' },
    {
      name: 'Foot Massage + Peeling + Mask',
      price: '60min 130.-',
    },
    { name: 'Lymphatic Drainage:', price: '30min 60.- // 60min 110.-' },
  ];
}
