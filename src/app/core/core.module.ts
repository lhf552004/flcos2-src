import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NgbCollapseModule, NgbProgressbarModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './layout/menu/menu.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { SearchComponent } from './layout/search/search.component';

@NgModule({
  declarations: [MainLayoutComponent, MenuComponent, BreadcrumbsComponent, LoaderComponent, SearchComponent],
  imports: [
    // vendor
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,

    // bootstrap
    NgbCollapseModule,
    NgbProgressbarModule,
    NgbDropdownModule,

    // font awesome
    FontAwesomeModule
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
