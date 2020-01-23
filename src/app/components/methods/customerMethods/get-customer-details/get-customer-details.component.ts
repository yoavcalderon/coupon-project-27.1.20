import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-customer-details',
  templateUrl: './get-customer-details.component.html',
  styleUrls: ['./get-customer-details.component.css']
})
export class GetCustomerDetailsComponent implements OnInit {
  private customer: Customer= new Customer();
  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit() {
    this.service.getCustomerDetails().subscribe(cust=>{
this.customer= cust;

// (cust.id);
// (cust.email);
// (cust.firstName);
// (cust.lastName);
// (cust.password);
    });
  }
  // public getOneCustomer(id: number): void{
  //   this.customer.id= id;
  //   this.service.getCustomerDetails().subscribe(cust =>{

  //   })
  // }

}
