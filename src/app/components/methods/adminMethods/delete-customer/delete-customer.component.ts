import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customer: Customer = new Customer();
    constructor(private service: AdminService, private router: Router) { }
  
    ngOnInit() {
    }
    public deleteCustomer(customer: Customer): void {
      var result= confirm("are you sure you want to delete"+ this.customer.firstName+"?");
      if(result){
        this.service.deleteCustomer(this.customer).subscribe( () => {
          this.ngOnInit();
        });
      }
      
  
      
  
    };
  
  }
