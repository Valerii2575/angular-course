import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { SortPipe } from './pipes/sort.pipe';
import { CopyrightDirective } from './directives/copyright.directive';
import { NumericDirective } from './directives/numeric.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
