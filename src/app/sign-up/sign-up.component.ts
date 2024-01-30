import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, CognitoService } from '../services/cognito.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  loading: boolean;
  isConfirm: boolean;
  signUpSuccessMessage: String;
  user: IUser;
  errorMessage: String

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
    // redirect to home if already logged in
    if (this.cognitoService.currentUserValue) { 
      this.router.navigate(['/']);
    }
  }
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
        if(this.isConfirm){
          this.confirmSignUp()
        }else{
          this.signUp()
          
        }
    }
  }
  public signUp(): void {
    this.loading = true;
    this.errorMessage = ""
    this.cognitoService.signUp(this.user)
    .then(() => {
      this.loading = false;
      this.isConfirm = true;
      this.signUpSuccessMessage = "We have sent confirmation code on your email address."
    }).catch((error) => {
      this.errorMessage = error.message
      this.loading = false;
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.errorMessage = ""
    this.cognitoService.confirmSignUp(this.user)
    .then(() => {
      this.signUpSuccessMessage = ""
      this.router.navigate(['/sign-in']);
    }).catch((error) => {
      this.errorMessage = error.message
      this.signUpSuccessMessage = ""
      this.loading = false;
    });
  }

}
