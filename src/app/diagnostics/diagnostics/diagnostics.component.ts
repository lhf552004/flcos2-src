import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from '../../shared/side-bar/model/menu-item.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'emes-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.scss']
})
export class DiagnosticsComponent implements OnInit, OnDestroy {
  // Menu items
  menuItems: MenuItem[];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
