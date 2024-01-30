import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser, CognitoService } from '../services/cognito.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  loading: boolean;
  user: IUser;
  message: String
  errorMessage: String

  constructor(private router: Router, private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
    if (this.checkEmpty(this.cognitoService.currentUserValue)) {
      this.router.navigate(['/sign-in']);
    }
  }
  public checkEmpty(value:any):any {
    return  value == null || value.length == 0
  }

  public ngOnInit(): void {
    this.cognitoService.getUser()
    .then((user: any) => {
      this.user = user.attributes;      
    });
  }
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.update()
    }
  }
  public update(): void {
    this.loading = true;
    this.message = ""
    this.errorMessage = ""
    this.cognitoService.updateUser(this.user)
    .then((response) => {
      
      this.loading = false;
      this.message = "your profile information update successfully"
    }).catch((error) => {
      this.errorMessage = error
      this.loading = false;
    });
  }

}
