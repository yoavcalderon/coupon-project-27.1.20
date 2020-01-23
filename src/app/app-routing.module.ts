import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CompanyComponent } from './components/company/company.component';
import { GetAllCompaniesComponent } from './components/methods/adminMethods/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from './components/methods/adminMethods/get-all-customers/get-all-customers.component';
import { AddCompanyComponent } from './components/methods/adminMethods/add-company/add-company.component';
import { AddCustomerComponent } from './components/methods/adminMethods/add-customer/add-customer.component';
import { DeleteCompanyComponent } from './components/methods/adminMethods/delete-company/delete-company.component';
import { DeleteCustomerComponent } from './components/methods/adminMethods/delete-customer/delete-customer.component';
import { GetOneCompanyComponent } from './components/methods/adminMethods/get-one-company/get-one-company.component';
import { UpdateCompanyComponent } from './components/methods/adminMethods/update-company/update-company.component';
import { UpdateCustomerComponent } from './components/methods/adminMethods/update-customer/update-customer.component';
import { GetOneCustomerComponent } from './components/methods/adminMethods/get-one-customer/get-one-customer.component';
import { AddCouponComponent } from './components/methods/companyMethods/add-coupon/add-coupon.component';
import { DeleteCouponComponent } from './components/methods/companyMethods/delete-coupon/delete-coupon.component';
import { GetCompanyCouponsComponent } from './components/methods/companyMethods/get-company-coupons/get-company-coupons.component';
import { GetCompanyCouponsCategoryComponent } from './components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component';
import { GetCompanyCouponsPriceComponent } from './components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component';
import { UpdateCouponComponent } from './components/methods/companyMethods/update-coupon/update-coupon.component';
import { GetCustomerCouponsComponent } from './components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component';
import { GetCustomerCouponsCategoryComponent } from './components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component';
import { GetCustomerCouponsPriceComponent } from './components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component';
import { GetCustomerDetailsComponent } from './components/methods/customerMethods/get-customer-details/get-customer-details.component';
import { PurchaseCouponComponent } from './components/methods/customerMethods/purchase-coupon/purchase-coupon.component';
import { GetAllCouponsComponent } from './components/methods/customerMethods/get-all-coupons/get-all-coupons.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'login',component: LoginComponent},
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'delete-company', component: DeleteCompanyComponent},
  {path: 'delete-customer', component: DeleteCustomerComponent},
  {path: 'get-one-customer', component: GetOneCustomerComponent},
  {path: 'get-one-company', component: GetOneCompanyComponent},
  {path: 'update-company', component: UpdateCompanyComponent},
  {path: 'update-customer', component: UpdateCustomerComponent},
  {path: 'get-all-companies', component:GetAllCompaniesComponent},
  {path: 'get-all-customers', component:GetAllCustomersComponent},
  {path: 'add-coupon', component:AddCouponComponent},
  {path: 'delete-coupon', component:DeleteCouponComponent},
  {path: 'get-company-coupons', component:GetCompanyCouponsComponent},
  {path: 'get-company-coupons-price', component:GetCompanyCouponsPriceComponent},
  {path: 'get-company-coupons-category', component:GetCompanyCouponsCategoryComponent},
  {path: 'update-coupon', component:UpdateCouponComponent},
  {path: 'get-customer-coupons', component:GetCustomerCouponsComponent},
  {path: 'get-customer-coupons-category', component:GetCustomerCouponsCategoryComponent}, 
  {path: 'get-customer-coupons-price', component:GetCustomerCouponsPriceComponent}, 
  {path: 'get-customer-details', component:GetCustomerDetailsComponent},
  {path: 'purchase-coupon', component:PurchaseCouponComponent},
  {path: 'get-all-coupons', component:GetAllCouponsComponent},

  {path: "", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
