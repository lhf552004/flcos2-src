import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuItem } from 'src/app/shared/side-bar/model/menu-item.model';
import { Warehouse } from '../shared/models/warehouse.model';
import { TreeviewNode } from 'tree-view';


@Component({
  selector: 'emes-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {

  menuItems: MenuItem[];
  // tree view nodes
  treeViewNodes: TreeviewNode[] = [];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: {warehouses: Warehouse[]}) =>{
      this.menuItems = data.warehouses.map(w => ({
        id: w.id,
        icon: faHome,
        label: w.name,
        route: [w.id],
        children: []
      }));
      this.treeViewNodes = this.menuItems.map(menuItem => {
          const node = new TreeviewNode(menuItem.id, menuItem.label, 1, null, menuItem.icon, menuItem.badges ? menuItem.badges : [], {
            menuItem,
            route: menuItem.route,
            onClick: menuItem.onClick
          });
          return node;
        }
      );
    });

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
