import { Component, OnInit } from '@angular/core';
import { DemoAuth } from '../entities/demo';
import { DemoService } from '../services/demo.service';
import { Router } from '@angular/router';

import { CognitoService } from '../services/cognito.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  apiMessage: string = ""
  apiStatusCode: Number

  constructor(
    private _demoService: DemoService,
    private router: Router,
    private cognitoService: CognitoService
  ) {
    if (this.checkEmpty(this.cognitoService.currentUserValue)) {
      this.router.navigate(['/sign-in']);
    }

  }
  public checkEmpty(value:any):any {
    return  value == null || value.length == 0
  }

  ngOnInit(): void {
  }

  userClick() {
    this.apiMessage = ""
    this.apiStatusCode = 0
    this._demoService.getUserMessage().subscribe(x => {
      x.subscribe({
        next: (response: any) => {
          this.apiMessage = response.message
          this.apiStatusCode = 200
        },
        error: (err: any) => {
          this.apiMessage = "You are not authorized to perform this operation"
          this.apiStatusCode = err.status
        },
        complete: () => {
          console.log("hi i am here complete")
        }
      })
    })
  }


  adminClick() {
    this.apiMessage = ""
    this.apiStatusCode = 0
    this._demoService.getAdminMessage().subscribe(x => {
      x.subscribe({
        next: (response: any) => {
          this.apiMessage = response.message
          this.apiStatusCode = 200
        },
        error: (err: any) => {
          this.apiMessage = "You are not authorized to perform this operation"
          this.apiStatusCode = err.status
        },
        complete: () => {
          console.log("hi i am here complete")
        }
      })
    })
  }

}
