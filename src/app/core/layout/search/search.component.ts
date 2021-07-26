import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from './search.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SearchResult } from './search-result.model';

@Component({
  selector: 'emes-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  // Indicates whether the search panel should be shown
  showPanel: boolean = false;

  // The list of results
  results: SearchResult[];

  // Used for cleaning subscription 
  private unsubscribe: Subject<void> = new Subject();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchResult$.pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.showPanel = x.length > 0;
      this.results = x;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  closeSearchPanel() {
    this.showPanel = false;
  }
}
