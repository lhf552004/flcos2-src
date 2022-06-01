import {Component, OnInit, Input, HostBinding, ViewChild, ElementRef, OnChanges, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {
  faCog,
  faChevronLeft,
  faChevronRight,
  IconDefinition,
  faSearch,
  faTimes,
  faIndent,
  faOutdent
} from '@fortawesome/free-solid-svg-icons';
import {TreeviewOptions, TreeViewComponent, TreeviewNode} from 'tree-view';
import {MenuItem} from './model/menu-item.model';

@Component({
  selector: 'flcos-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnChanges {
  // Search text element
  @ViewChild('search') searchElement: ElementRef;

  // Tree view component
  @ViewChild(TreeViewComponent) treeview: TreeViewComponent;

  // Icons
  faCog: IconDefinition = faCog;
  faChevronLeft: IconDefinition = faChevronLeft;
  faChevronRight: IconDefinition = faChevronRight;
  faSearch: IconDefinition = faSearch;
  faTimes: IconDefinition = faTimes;
  faIndent: IconDefinition = faIndent;
  faOutdent: IconDefinition = faOutdent;

  // The list of menu items
  @Input() menuItems: MenuItem[];

  // Tree view nodes
  @Input() treeViewNodes: TreeviewNode[];

  // Indicator to expand tree by default
  @Input() expandedOnStart = true;

  // The header text
  @Input() header: string;

  // The expand/collapse status
  @HostBinding('class.collapsed') collapsed = false;

  // Indicate whether seach button is clicked
  isSearched = false;

  // Subject object of filter
  filterSubject$ = new Subject<string>();

  // Filter text
  filterText = '';

  // Filterd menu items
  filteredMenuItems: MenuItem[];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  // The list of menu items to show sticky at bottom
  stickyMenuItems: MenuItem[];

  // The treeview customization options
  options: TreeviewOptions = {
    styles: ['font-weight-bold'],
    expandedOnStart: true,
    showBadgeOnHoverOnly: true,
    showMiniBadges: true
  };

  // Indicates expand/collase tree toggler status
  allExpanded = true;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.options.expandedOnStart = !!this.expandedOnStart;
    this.filterSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.unsubscribe)
    ).subscribe(x => this.filterNodes());
  }

  ngOnChanges() {
    // Clear the treeview
    // this.treeviewNodes = [];
    this.filteredMenuItems = this.menuItems.filter(x => !x.stickyBottom);
    // Extract the sticky menu items and ensure default click callback is set if not defined
    this.stickyMenuItems = this.menuItems.filter(x => x.stickyBottom);
    this.stickyMenuItems.forEach(m => {
      const defaultOnClick = () => {
      };
      m.onClick = m.onClick || defaultOnClick;
    });

    // Build the tree view
    // this.convertMenuItemsToTreeviewNodes(this.menuItems.filter(x => !x.stickyBottom), this.treeviewNodes, 1);
  }

  toggleSideBar() {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      this.collapseAllNodes();
    }
  }

  triggerSearch() {
    this.isSearched = true;
    setTimeout(() => { // this will make the execution after the above boolean has changed
      this.searchElement.nativeElement.focus();
    }, 0);
  }

  resetSearch() {
    this.isSearched = false;
    this.filterText = '';
    this.filterNodes();
  }

  // Filter the nodes
  filterNodes() {
    this.treeview.filterTree(this.filterText);
  }

  change($event) {
    // Not required here
  }

  // Item clicked, show the content on the right side
  showItem(selectedNode: TreeviewNode) {
    console.log('Show item');
    const node = this.treeview.treeview.treeModel.getNodeById(selectedNode.id);
    node.expand();

    // Trigger the onClick callback if defined
    const onClick = selectedNode.data.data.onClick;
    if (onClick) {
      onClick(selectedNode);
    }

    // Navigate to route if defined
    const route = selectedNode.data.data.route;
    if (route && route[0]) {
      this.router.navigate(route, {relativeTo: this.route});
    }
  }

  menuItemClicked(subMenu: MenuItem) {
    const onClick = subMenu.onClick;
    if (onClick) {
      onClick(subMenu);
    }

    // Navigate to route if defined
    const route = subMenu.route;
    if (route && route[0]) {
      this.router.navigate(route, {relativeTo: this.route});
    }
  }

  // Update tree view
  convertMenuItemsToTreeviewNodes(menuItems: MenuItem[], treeNodes: TreeviewNode[], level: number) {
    if (menuItems) {
      menuItems.forEach(menuItem => {
        // @ts-ignore
        const node = new TreeviewNode(menuItem.id, menuItem.label, level, null, menuItem.icon, menuItem.badges ? menuItem.badges : [], {
          menuItem,
          route: menuItem.route,
          onClick: menuItem.onClick
        });
        if (menuItem.contextMenu) {
          node.contextMenu = menuItem.contextMenu.map(x => ({
            text: x.text,
            callback: (data: { menuItem: MenuItem }) => x.callback(data.menuItem)
          }));
        }
        treeNodes.push(node);
        if (menuItem.children && menuItem.children.length > 0) {
          this.convertMenuItemsToTreeviewNodes(menuItem.children, node.children, level + 1);
        }
      });
    }
  }

  // Expand all nodes
  expandAllNodes() {
    this.allExpanded = !this.allExpanded;
    this.treeview.expandAllNodes();
  }

  // Collapse all nodes
  collapseAllNodes() {
    this.allExpanded = !this.allExpanded;
    this.treeview.collapseAllNodes();
  }

  // Process menu item click
  processClick(m: MenuItem): void {
    if (m.collpaseOnClick) {
      this.collapsed = true;
      this.collapseAllNodes();
    }

    if (m.onClick) {
      m.onClick(m);
    }
  }

  onNodeExpended(expandedNode: TreeviewNode) {
    const node = this.treeview.treeview.treeModel.getNodeById(expandedNode.id);
    node.expand();

    // Trigger the onClick callback if defined
    const onExpand = expandedNode.data.data.onExpand;
    if (onExpand) {
      onExpand(expandedNode);
    }
  }
}
