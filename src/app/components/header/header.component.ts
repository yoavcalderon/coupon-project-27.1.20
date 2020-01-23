import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/Company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
companies: Company[];

  constructor(private service: AdminService, private router:Router) { }
  public navChooser: string;
ngDoCheck(){
  this.navChooser=sessionStorage.typeVar;
}
ngOnInit() {
  this.navChooser=sessionStorage.typeVar;
}


logout(){
  sessionStorage.token=null;
  sessionStorage.typeVar=null;
  this.router.navigate(['login']);

}
}
