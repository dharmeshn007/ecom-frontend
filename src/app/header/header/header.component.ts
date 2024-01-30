import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../../services/cognito.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 isAuthenticated: boolean;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
      this.isAuthenticated = false;

  }
  private checkvalue(user: any): void{
    if(user){
      this.isAuthenticated =true
    }else{
      this.isAuthenticated = false
    }

  }

  public ngOnInit(): void {
    this.cognitoService.authenticationSubject.subscribe(updated=>this.checkvalue(updated))
  }

  public signOut(): void {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/sign-in']);
    });
  }
}
