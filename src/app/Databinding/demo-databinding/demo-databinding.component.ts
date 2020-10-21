import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-databinding',
  templateUrl: './demo-databinding.component.html',
  styleUrls: ['./demo-databinding.component.scss']
})
export class DemoDatabindingComponent implements OnInit {
  // interpolation
  text: string = "Cybersoft Fe49";
  obHocVien: any = {
    HoTen: "Nguyễn Văn A",
    GioiTinh: "Nam"
  }


  // property binding
  isDisabled = true;
  imgSrc =
    'https://i2.wp.com/lucloi.vn/wp-content/uploads/2020/01/Cubs.png?fit=2880%2C1646&amp;ssl=1';


  // event binding
  // name:string = "Dang Trung Hieu"; Khai báo như vậy sẽ đúng hơn nhưng nếu gán cho nó giá trị mặc định đầu tiên >>> thì nó tự động lấy kiểu dữ liệu là string mà ko cần khai báo kiểu dữ liệu
  name = 'John William';
  changeName() {
    this.name = 'Tuyet Hong';
  }


   // twoway binding
  email: string;

 
  
  constructor() { }

  ngOnInit(): void {
  }

}
