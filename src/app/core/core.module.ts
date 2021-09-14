import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {NgbCollapseModule, NgbProgressbarModule, NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenuComponent} from './layout/menu/menu.component';
import {BreadcrumbsComponent} from './layout/breadcrumbs/breadcrumbs.component';
import {LoaderComponent} from './layout/loader/loader.component';
import {SearchComponent} from './layout/search/search.component';
import {NotificatorComponent} from './notificator/notificator.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CustomLoader} from './translate/custom-loader';
import {CustomTranslationService} from './translate/shared/custom-translation.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [MainLayoutComponent, MenuComponent, BreadcrumbsComponent, LoaderComponent, SearchComponent, NotificatorComponent],
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
    FontAwesomeModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader,
        deps: [CustomTranslationService]
      }
    })
  ],
  exports: [MainLayoutComponent, TranslateModule]
})
export class CoreModule {
}
