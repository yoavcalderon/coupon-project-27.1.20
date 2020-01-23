import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  public companies: Company[];
  public company: Company;
  public updater: boolean;

  constructor(private service: AdminService, private route: Router) { }

  ngOnInit() {
    this.service.getAllCompanies().subscribe((comp)=>{
      this.companies = comp;
    });
  }

 public deleteCompany(id: number): void{
     this.service.deleteCompany(id).subscribe(()=>{
     });
     this.ngOnInit();
   }
   public updateCompany(company: Company){
     this.service.updateCompany(this.company).subscribe((comp)=>{
       
      });
      this.ngOnInit(); 

      this.company.email=company.email;
  }
   public editorEnabler(company){
     this.company=company;
     if(this.updater==false){
       this.updater=true;
     }else{
       this.updater=false;
     }
   }

 
  

}