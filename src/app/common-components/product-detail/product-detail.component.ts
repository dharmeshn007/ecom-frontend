import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/entities/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public currentProductId: number;

  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.currentProductId = param["id"];
      this._productService.getProductItem(this.currentProductId).subscribe(
        data => this.product = data as Product
        
      );
    });
  }


}
