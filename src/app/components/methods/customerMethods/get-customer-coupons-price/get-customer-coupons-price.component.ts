import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-customer-coupons-price',
  templateUrl: './get-customer-coupons-price.component.html',
  styleUrls: ['./get-customer-coupons-price.component.css']
})
export class GetCustomerCouponsPriceComponent implements OnInit {
  public price: number;
  public coupons: Coupon[];
  public customers: Customer[];

  constructor(private service: CustomerService, private route: Router) { }

  ngOnInit() {
    this.service.getCustomerCouponsByPrice(this.price).subscribe((coup)=>{
      this.coupons = coup;
    });
  }

  

}