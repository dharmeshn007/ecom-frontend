import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductCardComponent } from './common-components/product-card/product-card.component';
import { BannerComponent } from './common-components/banner/banner.component';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './common-components/product-detail/product-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DemoComponent } from './demo/demo.component';
const routes: Routes = [
  {
    path: '',
    component: BannerComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: BannerComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
 
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
