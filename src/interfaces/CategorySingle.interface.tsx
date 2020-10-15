import { Category } from './Category.interface';

export interface CategorySingle extends Category {
    products_count: number;
    price_min: number;
    price_max: number;
}
