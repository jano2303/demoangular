import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { EditProductComponent } from './components/product/edit/edit.component';
import { ProductListComponent } from './components/product/index/index.component';
import { AddProductComponent } from './components/product/add/add.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
