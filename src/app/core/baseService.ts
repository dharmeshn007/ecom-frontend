import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

/** Base class for all services */
export class BaseService {
    private _http: HttpClient;
    private _baseUrl = environment.envVar.apiBaseUrl

    /** Create instance for httpClient base */
    constructor(
        http: HttpClient
    ) {
        this._http = http;
    }

    /**** Http get method */
    protected get<T>(
        uri: string,
        header:any={}
    ) {
        let url = `${this._baseUrl}/${uri}`;
        const headers = new HttpHeaders(header);
        return this._http.get<T>(url,{
            headers:headers
         });
    }
} 
