import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {
  coupon: Coupon = new Coupon();
  constructor(private service: CompanyService, private router: Router) { }

  ngOnInit() {
  }
  public deleteCompany(id: number): void {
    var result= confirm("are you sure you want to delete"+ this.coupon.title+"?");
    if(result){
      this.service.deleteCoupon(id).subscribe( () => {
        this.ngOnInit();
      });
    }
    

    

  };

}
