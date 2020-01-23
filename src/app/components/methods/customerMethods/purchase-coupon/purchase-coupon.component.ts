import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {
  public coupons: Coupon[];
  public coupon: Coupon;
  public category: string;
  public searchTerm: string;
  public searchPrice: string;
  
  constructor(private service: CustomerService, private route: Router) { }

  ngOnInit() {
    this.service.getAllCoupons().subscribe(
      coup=>{
      this.coupons = coup; 
    },
  
    );
  }

 public purchaseCoupon(coupon:Coupon): void{
     this.service.purchaseCoupon(coupon).subscribe(()=>{
    });
    this.ngOnInit();{
    alert("purchased")
  }
 }
 
  
  public categoryFilter(category: string){
    this.service.getCustomerCouponsByCategory(category).subscribe((cat)=>{

    });
    this.ngOnInit();
  }
  
  public priceFilter(price: number){
    this.service.getCustomerCouponsByPrice(price).subscribe((price)=>{

    });
    this.ngOnInit();
  }
  
}





