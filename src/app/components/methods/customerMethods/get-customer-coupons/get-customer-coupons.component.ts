import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Coupon } from 'src/app/models/Coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-customer-coupons',
  templateUrl: './get-customer-coupons.component.html',
  styleUrls: ['./get-customer-coupons.component.css']
})
export class GetCustomerCouponsComponent implements OnInit {
  public coupons: Coupon[];
  public coupon: Coupon;
  public customers: Customer[];

  constructor(private service: CustomerService, private route: Router) { }

  ngOnInit() {
    this.service.getCustomerCoupons().subscribe((coup)=>{
      this.coupons = coup;
    });
  }



  

}