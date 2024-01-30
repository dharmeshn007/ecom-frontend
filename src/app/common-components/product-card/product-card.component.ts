import { Component, Input } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
    selector: 'app-product-card',
    templateUrl: 'product-card.component.html',
    styleUrls: ['product-card.component.scss']
})
export class ProductCardComponent {
    @Input() product: Product = {} as Product;
    discountPercentage: number = 12;
    viewProduct() {
        //this.increaseInterest(1);
      }
    
      addProductToCart() {
        // this.increaseInterest(2);
      }
    
      buyProduct() {
        // this.increaseInterest(3);
      }
}