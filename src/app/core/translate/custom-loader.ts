import {TranslateLoader} from '@ngx-translate/core';
import {Observable, of, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {CustomTranslationService} from './shared/custom-translation.service';

export class CustomLoader implements TranslateLoader {
  constructor(private customTranslationService: CustomTranslationService) {
  }

  getTranslation(lang: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    // return combineLatest<object, object>(this.customTranslationService.getDynamicTranslations(lang), this.customTranslationService.getStaticTranslations(lang)).pipe(map(v => {
    //   // Return the merged translation object
    //   Object.assign(v[1], v[0]);
    //   return v[1];
    // }));
    return this.customTranslationService.getStaticTranslations(lang);
  }
}
