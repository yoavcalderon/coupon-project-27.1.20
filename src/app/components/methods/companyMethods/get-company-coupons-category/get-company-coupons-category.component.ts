import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/Coupon';

@Component({
  selector: 'app-get-company-coupons-category',
  templateUrl: './get-company-coupons-category.component.html',
  styleUrls: ['./get-company-coupons-category.component.css']
})
export class GetCompanyCouponsCategoryComponent implements OnInit {
  public coupons: Coupon[];
  public category: string;

  constructor(private service: CompanyService, private route: Router) { }

  ngOnInit() {
    // this.service.getCompanyCoupons(this.category).subscribe((coup)=>{
     this.service.getCompanyCoupons().subscribe((coup)=>{
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