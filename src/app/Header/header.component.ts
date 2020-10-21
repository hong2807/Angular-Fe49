import { Component } from '@angular/core';

//Component: decorator
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class Header {}

// import { Component } from '@angular/core'; => có nghĩa là component chứ ko phải class
// selector: tên gọi component, đặt tên sao thì dùng đúng cái tên đó
// templateUrl: chứa các HTML
// styleUrls: chứa CSS