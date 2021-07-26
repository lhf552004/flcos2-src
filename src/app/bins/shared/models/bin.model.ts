import { Product } from './product.model';

export class Bin {
    id: string;
    name: string;
    type: string;
    productId?: string;
    productName?: string;
}