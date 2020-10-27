import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {
  // *ngif
  isCheck = true;


  // *ngif else
  isGo = false;
  isFine = true;
  makeDecision(val: boolean) {
    this.isFine = val;
  }


  // *ngSwitch
  thang = 1;

  month;
  chonThang(e) {
    this.month = e.target.value;
    // lấy giá trị đang chọn
  }
  

  // *ngFor
  monthOption = [
    { value: "1", title: 'Tháng 1' },
    { value: "2", title: 'Tháng 2' },
    { value: "3", title: 'Tháng 3' },
    { value: "4", title: 'Tháng 4' },
    { value: "5", title: 'Tháng 5' },
  ]
  mon;
  selectMonth(e) {
    this.mon = e.target.value;
    // lấy giá trị đang chọn
  }

  constructor() { }

  ngOnInit(): void {
  }

}
