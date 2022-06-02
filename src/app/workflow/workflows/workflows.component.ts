import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {Workflow} from '../../shared/workflow/models/workflow.model';
import {faSearch, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {MenuItem} from '../../shared/side-bar/model/menu-item.model';
import {faProductHunt} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'flcos-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent implements OnInit, OnDestroy {
  // Icons
  faSearch: IconDefinition = faSearch;

  menuItems: MenuItem[];

  workflows: Workflow[];

  // Holds filter text
  filterSubject$: Subject<string> = new Subject<string>();

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: {workflows: Workflow[]}) => {
      this.workflows = data.workflows;
      this.menuItems = data.workflows.map(w => ({
        id: w.id,
        icon: faProductHunt,
        label: w.name,
        route: [w.id],
        children: []
      }));
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
