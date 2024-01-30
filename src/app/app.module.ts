import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BannerComponent } from './common-components/banner/banner.component';
import { ProductCardComponent } from './common-components/product-card/product-card.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';

import { NgxStarsModule } from 'ngx-stars';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterComponent } from './common-components/filter/filter.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ProductDetailComponent } from './common-components/product-detail/product-detail.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    ProductCardComponent,
    FilterComponent,
    ProductDetailComponent,
    DemoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStarsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    NgxPaginationModule,
    NgxSliderModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
