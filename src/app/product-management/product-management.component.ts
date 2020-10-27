import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  listProduct = [
    {MaSP:1,TenSP:"Sony XZ",Gia:1000},
    {MaSP:2,TenSP:"Sony XZ2",Gia:1000},
    {MaSP:3,TenSP:"HTC U Ultra",Gia:1000},
    {MaSP:4,TenSP:"HTC U12 Plus",Gia:1000},
    {MaSP:5,TenSP:"Iphone XS MAX",Gia:1000},
    {MaSP:6,TenSP:"Iphone XR",Gia:1000},
    {MaSP:7,TenSP:"Xiaomi Mi Note 3",Gia:9900},
    {MaSP:8,TenSP:"Xiaomi Mi 8",Gia:1000},
    {MaSP:9,TenSP:"Galaxy Note 9",Gia:1000},
    {MaSP:10,TenSP:"Galaxy S9 Plus",Gia:1000},
    {MaSP:11,TenSP:"Nokia X9",Gia:1000},
  ]


  productName: string;
  productId: string;
  price: string;

  addProduct() {
    const newProduct = {
      MaSP: +this.productId, 
      // do kiểu dữ liệu string còn trong mảng listProduct là number>>> ép kiểu
      TenSP:  this.productName,
      Gia: +this.price,
    };
    this.listProduct.push(newProduct);
    this.clearForm();
  }

  clearForm() {
    this.productId = '';
    this.productName = '';
    this.price = '';
  }

  deleteProduct(id: number) {
    const index = this.listProduct.findIndex((item) => item.MaSP === id);
    this.listProduct.splice(index, 1);
  }

  spDuocChon: { MaSP: number; TenSP: string; Gia: string };
  selectProduct(sanpham: { MaSP: number; TenSP: string; Gia: string }) {
    this.spDuocChon = sanpham;
    console.log(this.spDuocChon);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
