import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {
coupon: Coupon = new Coupon();
  constructor(private service: CompanyService, private router: Router) { }

  ngOnInit() {
  }
  public updateCompany(company: Coupon): void{
    this.service.updateCoupon(this.coupon).subscribe(coup => {
    });
  }
}
