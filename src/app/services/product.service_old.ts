import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ProductItem } from '../model/product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // url = '/assets/products.json';
  url = 'http://localhost:8007/api/v1/search/';
  detail_url = '/assets/products-detail.json';
  products$: BehaviorSubject<ProductItem[]> = new BehaviorSubject([]);
  public product:ProductItem;
  constructor(private http:HttpClient) { }

  displayProducts(){
    return this.http.get<ProductItem[]>(`${this.url}`).subscribe(data => { 
      console.log(data)

      this.products$.next(data);
    });
  }

  getItem(id:any){
    return this.http.get(`${this.detail_url}`);
  }
}
