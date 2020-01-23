import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
customer : Customer = new Customer;
  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
  }
public createCustomer(): void{
  this.service.addCustomer(this.customer).subscribe(cust=>{
    if(cust){
alert(cust.firstName +" has been added")    }
else{alert(cust.firstName+ " has not been added")}
  });

};
}
