import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CompanyComponent } from './components/company/company.component';
import { AddCompanyComponent } from './components/methods/adminMethods/add-company/add-company.component';
import { AddCustomerComponent } from './components/methods/adminMethods/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './components/methods/adminMethods/delete-customer/delete-customer.component';
import { DeleteCompanyComponent } from './components/methods/adminMethods/delete-company/delete-company.component';
import { GetAllCompaniesComponent } from './components/methods/adminMethods/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from './components/methods/adminMethods/get-all-customers/get-all-customers.component';
import { GetOneCompanyComponent } from './components/methods/adminMethods/get-one-company/get-one-company.component';
import { GetOneCustomerComponent } from './components/methods/adminMethods/get-one-customer/get-one-customer.component';
import { UpdateCompanyComponent } from './components/methods/adminMethods/update-company/update-company.component';
import { UpdateCustomerComponent } from './components/methods/adminMethods/update-customer/update-customer.component';
import { GetCompanyCouponsComponent } from './components/methods/companyMethods/get-company-coupons/get-company-coupons.component';
import { AddCouponComponent } from './components/methods/companyMethods/add-coupon/add-coupon.component';
import { DeleteCouponComponent } from './components/methods/companyMethods/delete-coupon/delete-coupon.component';
import { GetCompanyCouponsCategoryComponent } from './components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component';
import { GetCompanyCouponsPriceComponent } from './components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component';
import { UpdateCouponComponent } from './components/methods/companyMethods/update-coupon/update-coupon.component';
import { GetCustomerCouponsComponent } from './components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component';
import { GetCustomerCouponsCategoryComponent } from './components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component';
import { GetCustomerCouponsPriceComponent } from './components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component';
import { GetCustomerDetailsComponent } from './components/methods/customerMethods/get-customer-details/get-customer-details.component';
import { PurchaseCouponComponent } from './components/methods/customerMethods/purchase-coupon/purchase-coupon.component';
import { categoryFilterPipe } from './components/methods/category-filter.pipe';
import { priceFilterPipe } from './components/methods/price-filter.pipe';
import { GetAllCouponsComponent } from './components/methods/customerMethods/get-all-coupons/get-all-coupons.component';

@NgModule({
  declarations: [
    
    LayoutComponent,
    
    HeaderComponent,
    
    
    MainComponent,
    
    FooterComponent,
    
    LoginComponent,
    
    AdminComponent,
    
    CustomerComponent,
    
    CompanyComponent,
    
    AddCompanyComponent,
    
    AddCustomerComponent,
    
    DeleteCustomerComponent,
    
    DeleteCompanyComponent,
    
    GetAllCompaniesComponent,
    
    GetAllCustomersComponent,
    
    GetOneCompanyComponent,
    
    GetOneCustomerComponent,
    
    UpdateCompanyComponent,
    
    UpdateCustomerComponent,
    
    GetCompanyCouponsComponent,
    
    AddCouponComponent,
    
    DeleteCouponComponent,
    
    GetCompanyCouponsCategoryComponent,
    
    GetCompanyCouponsPriceComponent,
    
    UpdateCouponComponent,
    
    GetCustomerCouponsComponent,
    
    GetCustomerCouponsCategoryComponent,
    
    GetCustomerCouponsPriceComponent,
    
    GetCustomerDetailsComponent,
    
    PurchaseCouponComponent,
    
    
    categoryFilterPipe,
    
    priceFilterPipe,
    
    GetAllCouponsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
