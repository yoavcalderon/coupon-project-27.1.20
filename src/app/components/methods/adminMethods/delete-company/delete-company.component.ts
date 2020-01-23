import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/Company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {
company: Company = new Company();
  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
  }
  public deleteCompany(id: number): void {
    var result= confirm("are you sure you want to delete"+ this.company.name+"?");
    if(result){
      this.service.deleteCompany(id).subscribe( () => {
        this.ngOnInit();
      });
    }
    

    

  };

}
