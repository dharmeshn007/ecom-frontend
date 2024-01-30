import { Product } from "./product";
import { ProductFilter } from "./product_filter";

export interface WrapperSearch {
    total_products: number;
    result: Array<Product>;
    filter: Array<ProductFilter>;
    
}