import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IUser, CognitoService } from '../services/cognito.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  loading: boolean;
  user: IUser;
  errorMessage: String

  constructor(private router: Router,
    private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
    // redirect to home if already logged in
    if (this.cognitoService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.signIn()
    }
  }
  public signIn(): void {

    this.loading = true;
    this.errorMessage = ""
    this.cognitoService.signIn(this.user)
      .then(() => {
        this.router.navigate(['']);
      }).catch((error) => {
        this.errorMessage = error.message
        this.loading = false;
      });
  }

}
