import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { PaginationModule } from 'ngx-pagination-bootstrap'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MagazineComponent } from './magazine/magazine.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    MagazineComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    FormsModule,
    NgbModule,
    NgxSpinnerModule
    // NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
