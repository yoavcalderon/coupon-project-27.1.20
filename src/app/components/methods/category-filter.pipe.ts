import { PipeTransform, Pipe } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
@Pipe({
    name: 'categoryFilter'
})
export class categoryFilterPipe implements PipeTransform{
    transform(coupons: Coupon[], searchTerm: string): Coupon[]{
        if (!coupons || !searchTerm){
            return coupons;
        }
        return coupons.filter(coup => coup.category.toLowerCase().indexOf(searchTerm.toLowerCase()) ! == 0);

    }
}