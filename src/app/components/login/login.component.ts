import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public currentDate: Date;
  emailVar: string;
  passwordVar: string;
  typeVar: string;

  @Output()
  public transferName : EventEmitter<String>;

  constructor(private loginService: LoginService, private router: Router) {}
  public login(): void {
    this.loginService.login(this.emailVar, this.passwordVar, this.typeVar).subscribe(response => {
      if(response.token){
      sessionStorage.token = response.token;
      sessionStorage.typeVar = this.typeVar;
      this.routeToUser(sessionStorage.typeVar);

   
    }
    });
  }
  ngOnInit() {
    if(sessionStorage.typeVar){
this.routeToUser(sessionStorage.typeVar)
}
this.currentDate= new Date();
}
routeToUser(typeVar){
  switch(typeVar){
    case "ADMINISTRATOR":
      this.router.navigate(["/admin"])
      break;
      case "CUSTOMER":
        this.router.navigate(["/customer"])
        break;
        case "COMPANY":
          this.router.navigate(["/company"])
          break;

    }
  }

}
