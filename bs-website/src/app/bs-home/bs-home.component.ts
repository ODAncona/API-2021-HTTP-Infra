import { Component, OnInit } from '@angular/core';
import { BsBookComponent } from '../bs-book/bs-book.component';

@Component({
  selector: 'app-bs-home',
  templateUrl: './bs-home.component.html',
  styleUrls: ['./bs-home.component.scss']
})
export class BsHomeComponent implements OnInit {
  images = [
    "../../assets/images/photos/slide_home1.jpg",
    "../../assets/images/photos/Hotel_Beau_Suiza_SlideHome1.jpg",
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
