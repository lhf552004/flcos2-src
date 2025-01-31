import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { JwtInterceptor } from './core/user/jwt.interceptor';
import { ErrorInterceptor } from './core/user/error.interceptor';
import { fakeBackendProvider } from './core/user/fake-backend';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { DynamicFormModule } from 'dynamic-form';
import { DataTableModule } from 'data-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DynamicFormModule,
    DataTableModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
