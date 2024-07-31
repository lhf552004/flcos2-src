import {Component, OnDestroy, OnInit} from '@angular/core';

import {JobService} from '../shared/job.service';
import {MenuItem} from '../../shared/side-bar/model/menu-item.model';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {TreeviewNode} from 'tree-view';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'flcos-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit, OnDestroy {

  // Menu items
  menuItems: MenuItem[];

  // tree view nodes
  treeViewNodes: TreeviewNode[] = [];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private jobService: JobService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.lineId;
    this.jobService.objects$.pipe(takeUntil(this.unsubscribe)).subscribe(jobs => {
      this.menuItems = jobs.map(j => ({
        id: j.id,
        label: j.name + ' ' + j.status,
        route: [j.id], children: []
      }));
      this.treeViewNodes = this.menuItems.map(menuItem => {
          // @ts-ignore
          return new TreeviewNode(menuItem.id, menuItem.label, 1, null, menuItem.icon, menuItem.badges ? menuItem.badges : [], {
            menuItem,
            route: menuItem.route,
            onClick: menuItem.onClick
          });
        }
      );
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
