import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {NgbCollapseModule, NgbProgressbarModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {MenuComponent} from './layout/menu/menu.component';
import {BreadcrumbsComponent} from './layout/breadcrumbs/breadcrumbs.component';
import {LoaderComponent} from './layout/loader/loader.component';
import {SearchComponent} from './layout/search/search.component';
import {NotificatorComponent} from './notificator/notificator.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CustomLoader} from './translate/custom-loader';
import {CustomTranslationService} from './translate/shared/custom-translation.service';
import { MenuItemComponent } from './layout/menu/menu-item/menu-item.component';
import {AngularMaterialModule} from '../angular-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {PlatformModule} from '@angular/cdk/platform';
import {CdkTableModule} from '@angular/cdk/table';
import {OverlayModule} from '@angular/cdk/overlay';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [MainLayoutComponent, MenuComponent, BreadcrumbsComponent, LoaderComponent, SearchComponent, NotificatorComponent, MenuItemComponent],
  imports: [
    // vendor
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    // bootstrap
    NgbCollapseModule,
    NgbProgressbarModule,
    NgbDropdownModule,

    AngularMaterialModule,
    // font awesome
    FontAwesomeModule,
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
