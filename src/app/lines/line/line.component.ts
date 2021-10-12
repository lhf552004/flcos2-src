import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuItem } from 'src/app/shared/side-bar/model/menu-item.model';

@Component({
  selector: 'emes-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  // Menu items
  menuItems: MenuItem[];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['lineId'];
    this.menuItems = [
      {id: '1', label: 'Jobs', icon: faTasks, route: ['jobs'], children: []},
      {id: '2', label: 'Line Home', icon: faTasks, route: ['..', id], children: []},
      {id: '3', label: 'Line Detail', icon: faTasks, route: ['details'], children: []},
      {id: '4', label: 'Job Log', icon: faTasks, route: ['joblogs'], children: []}
    ];
  }

}
