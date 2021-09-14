import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  // The local storage key For preferences
  LOCAL_STORAGE_PREFERENCES = 'PREFERENCES';

  constructor(private translateService: TranslateService) {
    this.InitLanguage();
  }

  // Initialize the app language based on browser language
  InitLanguage() {
    // Initialize list of languages
    this.translateService.addLangs(['gb', 'us', 'fr', 'es', 'cn']);
    this.translateService.setDefaultLang('gb');

    // Retrieve preferences langauge
    const preferences = this.getPreferences();
    const preferenceLang = preferences != null ? preferences.language || '' : '';

    // Retrieve browser language
    const browserLang = this.translateService.getBrowserLang();

    // Set language to use
    // Priority to preferences, then browser, then default language
    const languageToUse = preferenceLang.match(/gb|us|fr|es|cn/) ? preferenceLang : (browserLang.match(/gb|us|fr|es|cn/) ? browserLang : 'gb');

    this.translateService.use(languageToUse);
  }

  // TODO: Should move to a service
  // See use in the preference component too
  getPreferences() {
    const pref = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_PREFERENCES));
    return pref;
  }
}
