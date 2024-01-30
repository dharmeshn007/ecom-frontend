import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BaseService } from '../core/baseService'
import { DemoAuth } from '../entities/demo';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DemoService extends BaseService {

    /** Create instance for product service */
    constructor(
        private _httpClient: HttpClient
    ) {
        super(_httpClient);
        var cognito = {
            userPoolId: environment.envVar.userPoolId,
            userPoolWebClientId: environment.envVar.userPoolWebClientId
        }
        Amplify.configure({
            Auth: cognito
        });

    }
    public getAuthToken() {
        Auth.currentSession().then((value) => {
            return value.getIdToken().getJwtToken()
        }).catch((error) => console.log(error))
    }
    public getUserMessage(): Observable<any> {
        return from(Auth.currentSession().then((value) => {
            var auth_token = value.getAccessToken().getJwtToken()
            const myInit = {
                Authorization: `${auth_token}`
            };
    
            console.log(myInit)
            return this.get<any>(`user`, myInit);
        }).catch((error) => console.log(error)))
        
    }

    /** function to product suggestor */
    public getAdminMessage(): Observable<any> {
        return from(Auth.currentSession().then((value) => {
            var auth_token = value.getAccessToken().getJwtToken()
            const myInit = {
                Authorization: `${auth_token}`
            };
    
            console.log(myInit)
            return this.get<any>(`admin`, myInit);
        }).catch((error) => console.log(error)))
    }

}
