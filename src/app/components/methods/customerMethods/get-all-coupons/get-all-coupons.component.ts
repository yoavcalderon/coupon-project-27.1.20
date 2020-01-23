import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

    public coupons: Coupon[];
    public customers: Customer[];
  
    constructor(private service: CustomerService, private route: Router) { }
  
    ngOnInit() {
      this.service.getAllCoupons().subscribe((coup)=>{
        this.coupons = coup;
      });
    }}
    