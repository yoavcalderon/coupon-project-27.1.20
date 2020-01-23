import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
customer: Customer = new Customer();
  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
  }
public updateCustomer(customer: Customer): void{
  this.service.updateCustomer(customer).subscribe(cust => {
    if(cust){this.router.navigate(["/getAllCustomers"])}
  })
}
}
