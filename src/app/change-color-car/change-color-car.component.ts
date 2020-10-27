import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-color-car',
  templateUrl: './change-color-car.component.html',
  styleUrls: ['./change-color-car.component.scss']
})
export class ChangeColorCarComponent implements OnInit {
  imgDefault = '../../assets/img/black-car.jpg';

  changeColor(img) {
    this.imgDefault = `../../assets/img/${img}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
