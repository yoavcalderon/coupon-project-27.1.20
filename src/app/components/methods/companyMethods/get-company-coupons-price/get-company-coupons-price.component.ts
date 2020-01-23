import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-company-coupons-price',
  templateUrl: './get-company-coupons-price.component.html',
  styleUrls: ['./get-company-coupons-price.component.css']
})
export class GetCompanyCouponsPriceComponent implements OnInit {
  public price: number;
  public coupons: Coupon[];

  constructor(private service: CompanyService, private route: Router) { }

  ngOnInit() {
    this.service.getCouponsByPrice(this.price).subscribe((coup)=>{
      this.coupons = coup;
    });
  }
 public deleteCoupon(id: number): void{
   var result = confirm("Are you sure you would like to delete this Coupon?");
   if(result){
     this.service.deleteCoupon(id).subscribe(()=>{
       this.ngOnInit();
     });
   }
 }
  

}