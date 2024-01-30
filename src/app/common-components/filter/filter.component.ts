import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ProductFilter } from 'src/app/entities/product_filter';
import { BannerComponent } from '../banner/banner.component';
// import { BannerComponentAPI } from '../banner/banner.component';
import { Options, LabelType, ChangeContext } from "@angular-slider/ngx-slider";
@Component({
  selector: 'product-left-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  // public colorList: any = [];
  // public priceList: any = [];
  // public genderList :any = [];

  @Output() priceChange = new EventEmitter<string>();
  @Input() product_filter: ProductFilter = {} as ProductFilter;
  @Input() filterColor: (event: any, entry: any) => void
  @Input() filterPrice: (event: any, entry: any) => void
  @Input() filterGender: (event: any, entry: any) => void
  @Input() genderSet: any
  @Input() priceSet: any
  @Input() colorSet: any
  // @Input() filterPrice: EventEmitter<{event:any,entry:any}> = new EventEmitter<{event:any,entry:any}>;
  @Input() bannerCom: BannerComponent;
  
  priceMinValue = 0;
  priceMaxValue = 500;
  options: Options = {
    floor: 0,
    ceil: 3000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$" + value;
        case LabelType.High:
          return "$" + value;
        default:
          return "$" + value;
      }
    }
  };


  constructor() { }


  ngOnInit() {
    console.log(this.product_filter);
    this.priceMinValue = this.product_filter.price_min*1.2
    this.priceMaxValue = this.product_filter.price_max*.90
    this.options.ceil = this.product_filter.price_max
    this.options.floor = this.product_filter.price_min


  }
  genderChecked(value: string) {
    if (this.genderSet.has(value)) {
      return true
    } else {
      return false
    }

  }
  colorChecked(value: string) {
    if (this.colorSet.has(value)) {
      return true
    } else {
      return false
    }

  }
  priceChecked(value: string) {
    if (this.priceSet.has(value)) {
      return true
    } else {
      return false
    }

  }

  sliderEvent() {

    this.priceChange.emit()

  }

  // filterColorC(event:any,entry: { key: string; value: boolean }) {
  //   this.bannerCom.filterColor(event,entry) 

  // }

  // filterPriceC(event:any,entry: { key: string; value: boolean }) {
  //   this.bannerCom.filterPrice(event,entry) 

  // }
  // filterGenderC(event:any,entry: { key: string; value: boolean }) {
  //   console.log("hi i am here")
  //   this.bannerCom.filterGender(event,entry) 
  // }

}
