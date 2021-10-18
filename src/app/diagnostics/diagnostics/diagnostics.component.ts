import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from '../../shared/side-bar/model/menu-item.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {OpcServerService} from '../../shared/services/opc-server.service';
import {OpcNodeItem} from '../../shared/models/opc-node-item.model';
import {TreeviewNode} from 'tree-view';
import {OPCNodeList} from '../../shared/models/opc-node-list.model';

@Component({
  selector: 'emes-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.scss']
})
export class DiagnosticsComponent implements OnInit, OnDestroy {
  // Menu items
  menuItems: MenuItem[] = [];
  // tree view nodes
  treeViewNodes: TreeviewNode[] = [];

  // opcNodeList
  opcNodeList: OPCNodeList;

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private opcServerService: OpcServerService) {
  }

  ngOnInit(): void {
    this.opcServerService.opcNodeList$.pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      console.log(x);
      this.opcNodeList = x;
      const menuItem: MenuItem = {
        id: this.opcNodeList.root.nodeId,
        label: this.opcNodeList.root.name,
        route: [this.opcNodeList.root.id],
        onClick: this.onMenuItemExpand.bind(this),
        children: []
      };
      const node = new TreeviewNode(menuItem.id, menuItem.label, 1, null, menuItem.icon, menuItem.badges ? menuItem.badges : [], {
        menuItem,
        route: menuItem.route,
        onClick: menuItem.onClick,
        onExpand: this.onMenuItemExpand.bind(this)
      });
      node.data.node = node;
      this.menuItems.push(menuItem);
      this.treeViewNodes.push(node);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private buildMenuItems(parentNode: OpcNodeItem, menuItems: MenuItem[], treeNodes: TreeviewNode[], level: number) {
    const menuItem: MenuItem = {
      id: parentNode.nodeId,
      label: parentNode.name,
      route: [parentNode.id],
      children: []
    };
    const node = new TreeviewNode(menuItem.id, menuItem.label, level, null, menuItem.icon, menuItem.badges ? menuItem.badges : [], {
      menuItem,
      route: menuItem.route,
      onClick: menuItem.onClick,
      onExpand: this.onMenuItemExpand
    });
    menuItems.push(menuItem);
    treeNodes.push(node);
    parentNode.children.forEach(n => this.buildMenuItems(n, menuItem.children, node.children, level + 1));
  }

  onMenuItemExpand(treeNode: TreeviewNode) {
    const opcNodeId = treeNode.data.data.menuItem.id;
    const children: OpcNodeItem[] = this.getChildNode(opcNodeId, this.opcNodeList.root);

    const level = treeNode.level + 1;
    console.log('level: ' + level);
    children.forEach(opcNodeItem => {
      const menuItem: MenuItem = {
        id: opcNodeItem.nodeId,
        label: opcNodeItem.name,
        route: [opcNodeItem.id],
        onClick: this.onMenuItemExpand.bind(this),
        children: []
      };
      const node = new TreeviewNode(menuItem.id, menuItem.label, level, null, menuItem.icon, menuItem.badges ? menuItem.badges : [], {
        menuItem,
        route: menuItem.route,
        onClick: menuItem.onClick
      });
      node.data.node = node;
      const currentMenuItem: MenuItem = treeNode.data.data.menuItem;
      if (currentMenuItem.children.findIndex(m => m.id === menuItem.id) === -1) {
        currentMenuItem.children.push(menuItem);
        const currentTreeNode: TreeviewNode = treeNode.data.data.node;
        currentTreeNode.children.push(node);
      }
    });
    this.treeViewNodes = [...this.treeViewNodes];
  }

  getChildNode(opcNodeId: string, parentNode: OpcNodeItem): OpcNodeItem[] {
    let children: OpcNodeItem[] | null = null;
    if (parentNode.nodeId === opcNodeId) {
      children = parentNode.children;
    } else {
      let i = 0;
      const length = parentNode.children.length;
      while (i < length) {
        const curNode = parentNode.children[i];
        if (curNode.nodeId === opcNodeId) {
          children = curNode.children;
          break;
        } else {
          children = this.getChildNode(opcNodeId, curNode);
          if (children) {
            break;
          }
        }
        i++;
      }
    }
    return children;
  }

}
