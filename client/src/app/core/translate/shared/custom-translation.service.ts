import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomTranslationService {
  private endpointUrl = 'api/language-files';

  constructor(private httpClient: HttpClient) { }

  getDynamicTranslations(lang: string): Observable<any> {
    const url = `${this.endpointUrl}?language=${lang}`;
    return this.httpClient.get(url);
  }

  getStaticTranslations(lang: string): Observable<any> {
    const path = 'assets/i18n/' + lang + '.json';
    return this.httpClient.get(path);
  }
}
