import { PipeTransform, Pipe } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
@Pipe({
    name: 'priceFilter'
})
export class priceFilterPipe implements PipeTransform {
    transform(coupons: Coupon[], searchPrice: number): Coupon[] {
        if (!coupons || !searchPrice) {
            return coupons;
        }
        return coupons.filter(coup => coup.price > searchPrice);

    }
}