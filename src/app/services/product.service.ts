import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BaseService } from '../core/baseService'
import { Product } from '../entities/product';
import { WrapperSearch } from '../entities/wrapper_search';

@Injectable({
    providedIn: 'root'
})
export class ProductService extends BaseService {

    /** Create instance for product service */
    constructor(
        private _httpClient: HttpClient
    ) {
        super(_httpClient);
    }

    /** function to search product values */
    public getProductsByFilter(
        filter: string,
        page: Number,
        sort_by: string,
        colorSet: Set<any>,
        genderSet: Set<any>,
        priceMinValue: Number,
        priceMaxValue: Number,
    ): Observable<WrapperSearch> {
        var colorList = Array.from(colorSet)
        var genderList = Array.from(genderSet)

        var query_string: any = {}
        if (colorList.length > 0) {
            query_string['baseColour__in'] = colorList.map(ele => ele).join("__")
        }
        if (genderList.length > 0) {
            query_string['gender__in'] = genderList.map(ele => ele).join("__")
        }
        if (priceMinValue) {
            query_string['price__gte'] = priceMinValue
        }
        if (priceMaxValue) {
            query_string['price__lte'] = priceMaxValue
        }

        if (filter) {
            query_string['query'] = filter
        }
        if (page) {
            query_string['page'] = page
        }
        if (sort_by) {
            query_string['ordering'] = sort_by
        }
        const parms = new URLSearchParams(query_string)
        return this.get<WrapperSearch>(`product/api/v1/product/?${parms}`);
    }

    /** function to product suggestor */
    public searchBoxAutoSuggestor(
        filter: string
    ): Observable<WrapperSearch> {
        return this.get<WrapperSearch>(`product/api/v1/product/suggest/?query=${filter}`);
    }
    /** function to product detail */
    public getProductItem(
        id: Number
    ): Observable<Product> {
        return this.get<Product>(`product/api/v1/product/${id}/`);
    }
}