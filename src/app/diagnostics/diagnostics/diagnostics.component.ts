import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from '../../shared/side-bar/model/menu-item.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {OpcServerService} from '../../shared/services/opc-server.service';
import {OpcNodeItem} from '../../shared/models/opc-node-item.model';

@Component({
  selector: 'emes-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.scss']
})
export class DiagnosticsComponent implements OnInit, OnDestroy {
  // Menu items
  menuItems: MenuItem[] = [];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private opcServerService: OpcServerService) { }

  ngOnInit(): void {
    this.opcServerService.opcNodeList$.pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      console.log(x);
      this.buildMenuItems(x.root, this.menuItems);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private buildMenuItems(parentNode: OpcNodeItem, menuItems: MenuItem[]) {
    const menuItem = {
      id: parentNode.nodeId,
      label: parentNode.name,
      route: [parentNode.nodeId],
      children: []
    };
    menuItems.push(menuItem);
    parentNode.children.forEach(n => this.buildMenuItems(n, menuItem.children));
  }


}
