import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public customers: Customer[];
  public customer: Customer;
  public updater: boolean;

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
      this.service.getAllCustomers().subscribe((cust) =>{
        this.customers = cust;
      });

  
     
  }
  public deleteCustomer(customer: Customer): void{
    this.service.deleteCustomer(customer).subscribe(()=>{this.ngOnInit();
    });
    this.ngOnInit();
  }
  // public deleteCustomer(customer: Customer): void{
  //     this.service.deleteCustomer(customer).subscribe(()=>{this.ngOnInit();{

  //     } }); 
  //   }
    public updateCustomer(customer: Customer){
      this.service.updateCustomer(this.customer).subscribe((cust)=>{

      });
      this.ngOnInit();
    }
    public editorEnabler(customer){
      this.customer=customer;
      if(this.updater==false){
        this.updater=true;
      }else{
        this.updater=false;
      }
    }
 
  
   
 
 }
  


