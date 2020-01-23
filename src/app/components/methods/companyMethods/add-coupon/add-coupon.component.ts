import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/Company';


@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {
  coupon: Coupon = new Coupon;
  public company: Company;
  
  constructor(private service: CompanyService, private router: Router) { }

  ngOnInit() {

    
  }

  
  public createCoupon(): void{
    this.coupon.company=this.company;
    this.service.addCoupon(this.coupon).subscribe(coup =>{
      if(coup){
        coup.company=this.company
        
        alert(coup.title+ " coupon has been added")
        

      }
      else{
        alert(" the coupon has not been added")
      }
    });
  }

}
