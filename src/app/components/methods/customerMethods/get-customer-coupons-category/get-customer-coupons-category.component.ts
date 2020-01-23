import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Coupon } from 'src/app/models/Coupon';
import { Customer } from 'src/app/models/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-customer-coupons-category',
  templateUrl: './get-customer-coupons-category.component.html',
  styleUrls: ['./get-customer-coupons-category.component.css']
})
export class GetCustomerCouponsCategoryComponent implements OnInit {
  public coupons: Coupon[];
  public customers: Customer[];
  public category: string;

  constructor(private service: CustomerService, private route: Router) { }

  ngOnInit() {
     this.service.getCustomerCouponsByCategory(this.category).subscribe((coup)=>{
      this.coupons = coup;
    });
  }

  

}