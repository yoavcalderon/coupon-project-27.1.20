import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
company: Company = new Company();
  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
  }
  public updateCompany(company: Company){
    this.service.updateCompany(company).subscribe(comp => {
      alert("the company has been updated")
    });
  }


loadComp(id:number){
    this.service.getOneCompany(id).subscribe(comp=>{this.company=comp});
}
}