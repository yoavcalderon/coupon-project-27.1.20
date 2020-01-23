import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/Coupon';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client: HttpClient) { }
  public getCustomerCoupons(): Observable<Coupon[]>{
    return this.client.get<Coupon[]>("http://localhost:8080/customer/getCustomerCoupons/"+sessionStorage.token);
  }
  public getCustomerCouponsByCategory(category: string): Observable<Coupon[]>{
    return this.client.get<Coupon[]>("http://localhost:8080/customer/getCustomerCouponsCat/"+sessionStorage.token+"/"+ category+"/");
  }
  public getCustomerCouponsByPrice(price: number): Observable<Coupon[]>{
    return this.client.get<Coupon[]>("http://localhost:8080/customer/getCustomerCouponsPrice/"+sessionStorage.token+"/"+ price+"/");
  }
  public getCustomerDetails(): Observable<Customer>{
    return this.client.get<Customer>("http://localhost:8080/customer/getCustomerDetails/"+sessionStorage.token);
  }
  public purchaseCoupon(coupon: Coupon): Observable<Coupon>{
    return this.client.post<Coupon>("http://localhost:8080/customer/purchaseCoupon/"+sessionStorage.token, coupon);
  }
  public getAllCoupons(): Observable<Coupon[]>{
    return this.client.get<Coupon[]>("http://localhost:8080/customer/getAllCoupons/"+sessionStorage.token);
  }
}
