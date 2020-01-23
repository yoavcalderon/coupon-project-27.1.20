import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/Company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  
company: Company = new Company();
  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
  }
  public createCompany(): void{
    this.service.addCompany(this.company).subscribe(comp =>{
      if(comp){
        alert( comp.name+ " has been added")
        
      }
      else{
        alert(comp.name +" the company has not been added")
      }
    });
  }

}
