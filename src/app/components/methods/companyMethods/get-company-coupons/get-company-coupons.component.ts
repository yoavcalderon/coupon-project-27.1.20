import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-company-coupons',
  templateUrl: './get-company-coupons.component.html',
  styleUrls: ['./get-company-coupons.component.css']
})
export class GetCompanyCouponsComponent implements OnInit {
  public coupons: Coupon[];
  public coupon: Coupon;
  public updater: boolean;
  public category: string;
  public searchTerm: string;
  public searchPrice: string;

  constructor(private service: CompanyService, private route: Router) { }

  ngOnInit() {
    this.service.getCompanyCoupons().subscribe((coup)=>{
      this.coupons = coup;
      
    });
  }

 public deleteCoupon(id: number): void{
     this.service.deleteCoupon(id).subscribe(()=>{
    });
    this.ngOnInit();{
      alert("press one more time to delete")
      
    }
   
 }
 public updateCoupon(coupon: Coupon){
   this.service.updateCoupon(this.coupon).subscribe((coup)=>{

   });
   this.ngOnInit();
 }
  public editorEnabler(coupon){
    this.coupon=coupon;
    if(this.updater==false){
      this.updater=true;
    }else{
      this.updater=false;
    }
  }
  public categoryFilter(category: string){
    this.service.getCouponsByCategory(category).subscribe((cat)=>{

    });
    this.ngOnInit();
  }
  
  public priceFilter(price: number){
    this.service.getCouponsByPrice(price).subscribe((price)=>{

    });
    this.ngOnInit();
  }
  
}





