import { CompanyComponent } from '../components/company/company.component';
import { Customer } from './Customer';
import { Company } from './Company';


export class Coupon{
    constructor(public id?: number, public company?: Company, public category?: string,
         public title?: string, public description?: string, public startDate?: Date,
          public endDate?: Date, public amount?: number, public price?: number, public image?: string){}
}