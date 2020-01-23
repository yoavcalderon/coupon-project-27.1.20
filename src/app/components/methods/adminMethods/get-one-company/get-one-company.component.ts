import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-one-company',
  templateUrl: './get-one-company.component.html',
  styleUrls: ['./get-one-company.component.css']
})
export class GetOneCompanyComponent implements OnInit {
company: Company = new Company()
  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
  }
  public getOneCompany(id: number): void{
    
    this.service.getOneCompany(id).subscribe(comp =>{
      if(comp){
        
        alert(comp)
      }else{
        alert("company has not found")
      }
    });

  }

}
