import { Component, EventEmitter, Output,ViewChild } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { WrapperSearch } from 'src/app/entities/wrapper_search';
import { ProductService } from 'src/app/services/product.service';
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged, filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.scss']
})


export class BannerComponent {
  @Output() searchProducts = new EventEmitter<Array<Product>>();
  valueToSearch: string = '';
  data: Array<Product> = [];
  @ViewChild(FilterComponent) filterComponentRef:FilterComponent

  isLoading = false;
  screenLoader = false;
  errorMsg!: string;
  minLengthTerm = 3;
  selectedTextQuery: any = "";
  filterProductNameForAutoComplete: any;
  searchProductCtrl = new FormControl();
  totalRecords: any;
  page: any = 1
  start: any;
  last: any;
  sort_by: any
  priceMin:Number
  priceMax:Number

  public colorSet: any = new Set();
  public priceSet: any = new Set();
  public genderSet: any = new Set();

  options = [
    { measure: 'price', display: 'Price Lowest to Higest' },
    { measure: '-price', display: 'Price Higest to Lowest' }
  ];
  left_filter: any
  constructor(
    private _productService: ProductService
  ) {

  }
  ngOnInit(): void {
    this.screenLoader = true
    this.searchProductCtrl.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = "";
          this.filterProductNameForAutoComplete = [];
          this.isLoading = true;
        }),
        switchMap(value => this._productService.searchBoxAutoSuggestor(value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe((data: any) => {
        console.log(data)
        if (data['result'] == undefined) {
          this.errorMsg = data['Error'];
          this.filterProductNameForAutoComplete = [];
        } else {
          this.errorMsg = "";
          this.filterProductNameForAutoComplete = data['result'];

        }
      });
    this.fetchProduct()
  }


  onSelected() {
    // # reset page number
    this.resetBasicAttr()
    this.fetchProduct()
  }

  fetchProduct() {  
    this._productService.getProductsByFilter(this.selectedTextQuery, this.page, this.sort_by, this.colorSet, this.genderSet, this.priceMin,this.priceMax).subscribe((response: WrapperSearch) => {
      this.data = response.result
      this.totalRecords = response.total_products
      this.left_filter = response.filter
      this.screenLoader = false
    })
  }

  displayWith(value: any) {
    return value;
  }

  clearSelection() {
    this.selectedTextQuery = "";
    this.filterProductNameForAutoComplete = [];
    this.resetBasicAttr()
    this.fetchProduct()
  }
  renderNextPage(event: number) {
    this.start = event * 10 - 9
    this.last = event * 10
    this.page = event
    this.screenLoader = true
    this.fetchProduct()
  }

  sortProduct() {
    this.resetBasicAttr()
    this.fetchProduct()

  }

  filterColor(event: any, entry: any) {
    console.log(this)
    // checked or not 
    if (event.target.checked) {
      this.colorSet.add(entry.key)
    } else {
      this.colorSet.delete(entry.key)
    }
    this.resetBasicAttr()
    this.fetchProduct()

  }
  
  filterPrice(event: any) {
    this.priceMin = this.filterComponentRef.priceMinValue
    this.priceMax = this.filterComponentRef.priceMaxValue
    this.resetBasicAttr()
    this.fetchProduct()

  }
  filterGender(event: any, entry: any) {
    
    if (event.target.checked) {

      this.genderSet.add(entry.key)
    } else {
      this.genderSet.delete(entry.key)
    }
    this.resetBasicAttr()
    this.fetchProduct()
  }
  resetBasicAttr(){
    this.start = 1
    this.last = 10
    this.page = 1
    this.screenLoader = true
    
  }

}


