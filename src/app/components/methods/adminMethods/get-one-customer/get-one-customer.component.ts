import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-one-customer',
  templateUrl: './get-one-customer.component.html',
  styleUrls: ['./get-one-customer.component.css']
})
export class GetOneCustomerComponent implements OnInit {
private customer: Customer = new Customer();
  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
  }
  public getOneCustomer(id: number): void{
    this.service.getOneCustomer(this.customer.id).subscribe(cust =>{
      if(cust){
        alert(cust)
      }else{alert("customer not found")}
    })
  }

}
