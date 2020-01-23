import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/Coupon';
import { Company } from '../models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private client: HttpClient) { }
  public getCompanyCoupons(): Observable<Coupon[]>{
    return this.client.get<Coupon[]>("http://localhost:8080/company/getCompanyCoupons/"+ sessionStorage.token);
  }
  public addCoupon(coupon: Coupon): Observable<Coupon>{
    return this.client.post<Coupon>("http://localhost:8080/company/addCoupon/"+sessionStorage.token, coupon);
  }
  public deleteCoupon(id: number): Observable<Coupon>{
    return this.client.delete<Coupon>("http://localhost:8080/company/deleteCoupon/"+sessionStorage.token+"/"+id+"/");

  }
  public getCouponsByCategory(category: string): Observable<Coupon[]>{
    return this.client.get<Coupon[]>("http://localhost:8080/company/getCompanyCouponsByCat/"+ sessionStorage.token+"/"+ category+"/");
  }
  public getCouponsByPrice(price: number): Observable<Coupon[]>{
    return this.client.get<Coupon[]>("http://localhost:8080/company/getCompanyCouponsPrice/"+ sessionStorage.token +"/"+price+"/");
  }
  public updateCoupon(coupon: Coupon): Observable<Coupon>{
    return this.client.put<Coupon>("http://localhost:8080/company/updateCoupon/"+sessionStorage.token, coupon);
  }
public getCompanyDetails(company: Company): Observable<any>{
  return this.client.get<any>("http://localhost:8080/company/getCompanyDetails/"+ sessionStorage.token+ "/");
}
}
