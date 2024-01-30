import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Amplify, { Auth } from 'aws-amplify';
import { User } from '../model/user';

import { environment } from '../../environments/environment';

export interface IUser {
  username: string;
  email: string;
  password: string;
  showPassword: boolean;
  code: string;
  name: string;  
}

@Injectable({
  providedIn: 'root',
})
export class CognitoService {

  public authenticationSubject: BehaviorSubject<User>;

  constructor() {
    var cognito = {
      userPoolId: environment.envVar.userPoolId,
      userPoolWebClientId: environment.envVar.userPoolWebClientId
    }
    Amplify.configure({
      Auth: cognito
    });
    this.authenticationSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      attributes: {
        'email': user.email,
        'name': user.name
      },
      password: user.password,
    });
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  public signIn(user: IUser): Promise<any> {
    return Auth.signIn(user.email, user.password)
    .then((user) => {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.authenticationSubject.next(user);
    });
  }
  public get currentUserValue(): User {
    return this.authenticationSubject.value;
  }

  public signOut(): Promise<any> {
    return Auth.signOut()
    .then(() => {
      sessionStorage.removeItem('currentUser');
      this.authenticationSubject.next(null);
    });
  }
  public isAuthenticatedUpdated(): Promise<any> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
      .then((user: any) => {
        if (user) {
          return true;
        } else {
          return false;
        }
      }).catch(() => {
        return false;
      });
    }
  }

  public isAuthenticated(): Promise<boolean> {
    
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
      .then((user: any) => {
        debugger
        if (user) {
          return true;
        } else {
          return false;
        }
      }).catch(() => {
        return false;
      });
    }
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser()
    .then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }

}
