import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { SearchResult } from './search-result.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // The search results
  searchResult$: Subject<SearchResult[]> = new BehaviorSubject<SearchResult[]>([]);

  // The url to the lunr index file
  private lunrUrl = environment.baseUrl + 'lunr';

  // The url to the documentation
  private documentClientBaseUrl = 'documentation';

  // The lunr index
  lunrIdx: any;

  // The local storage key of lunr index
  LOCAL_STORAGE_LUNRINDEX = 'LUNRINDEX';

  constructor(private http: HttpClient) { }

  init() {
    const localLunrIndex = this.getLocalLunrIndex();
    
   
    
  }

  search(searchText: string, searchField: string = '', searchTarget: string = ''): void {
    if (!searchText || !this.lunrIdx)
      this.searchResult$.next([]);
    else {
      // TODO: Implement here the search logic
      // We **might** need different type of search target (Product Vs Document Vs Change Management? Full text Vs Title Vs ?? Vs ?? )
      // Let's first implement ignoring this argument
      let results;
      searchTarget = searchTarget || 'full';

      if (!searchField) {
        results = this.lunrIdx.search(searchText);
      }else{
        results = this.lunrIdx.search(searchField + ':' + searchText);
      }

      this.searchResult$.next(results.map((r, index) => {
        return  { link: `${this.documentClientBaseUrl}/${r.ref}`, text: 'Link ' + index + ' to ' + searchText }
      }));
    }
  }

  getLocalLunrIndex(): { lunrIndex: any, lastModified: Date } | null {
    const localStorageItem = localStorage.getItem(this.LOCAL_STORAGE_LUNRINDEX);
    if(localStorageItem){
      return JSON.parse(localStorageItem);
    }
    return null;
  }

  setLocalLunrIndex(lunrIndex: any, lastModified: string) {
    const localLunrIndex = {
      lunrIndex: lunrIndex,
      lastModified: lastModified
    };
    localStorage.setItem(this.LOCAL_STORAGE_LUNRINDEX, JSON.stringify(localLunrIndex));
  }

}
