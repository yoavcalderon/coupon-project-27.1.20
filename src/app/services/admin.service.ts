import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private client: HttpClient) { }
  public addCompany(company: Company): Observable<Company>{
    return this.client.post<Company>("http://localhost:8080/admin/addCompany/" +sessionStorage.token , company);
  }
  public addCustomer(customer: Customer): Observable<Customer>{
    return this.client.post<Customer>("http://localhost:8080/admin/addCustomer/"+ sessionStorage.token, customer);
  }
  public deleteCompany(id: number): Observable<Company>{
    return this.client.delete<Company>("http://localhost:8080/admin/deleteCompany/"+id+"/"+ sessionStorage.token);
  }
  public deleteCustomer(customer:Customer): Observable<Customer>{
    return this.client.post<Customer>("http://localhost:8080/admin/deleteCustomer/"+ sessionStorage.token, customer);
  }
  public getAllCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>("http://localhost:8080/admin/getAllComp/"+ sessionStorage.token);
  }
  public getAllCustomers(): Observable<Customer[]>{
    return this.client.get<Customer[]>("http://localhost:8080/admin/getAllCus/"+ sessionStorage.token);

  }
  public getOneCompany(id: number): Observable<Company>{
    return this.client.get<Company>("http://localhost:8080/admin/getOneCompany/"+ sessionStorage.token+"/"+ id+"/");
  }
  public getOneCustomer(id: number): Observable<Customer>{
    return this.client.get<Customer>("http://localhost:8080/admin/getOneCustomer/"+ sessionStorage.token+"/"+ id+"/");
  }
  public updateCompany(company: Company): Observable<Company>{
    return this.client.put<Company>("http://localhost:8080/admin/updateCompany/" +sessionStorage.token, company);
  } 
  public updateCustomer(customer: Customer): Observable<Customer>{
    return this.client.put<Customer>("http://localhost:8080/admin/updateCustomer/" +sessionStorage.token, customer);
  } 
   

}
