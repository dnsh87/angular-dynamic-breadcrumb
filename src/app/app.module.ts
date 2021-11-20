import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { NewProductTypeComponent } from './new-product-type/new-product-type.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    HomeComponent,
    ProductComponent,
    ProductTypeComponent,
    NewProductTypeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
