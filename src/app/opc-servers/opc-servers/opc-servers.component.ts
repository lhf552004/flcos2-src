import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {UserService} from '../../core/user/user.service';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTasks, faTrash} from '@fortawesome/free-solid-svg-icons';
import {User} from '../../core/user/models/user.model';
import {Role} from '../../core/user/models/role.model';
import {UserViewerComponent} from '../../admin/user-viewer/user-viewer.component';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';
import {DynamicFormService, ModalConfig, CustomValidators} from 'dynamic-form';
import {OpcServerConfigService} from '../shared/opc-server-config.service';
import {MenuItem} from '../../shared/side-bar/model/menu-item.model';
import {ActivatedRoute, Router} from '@angular/router';
import {OPCServer} from '../shared/models/opc-server.model';
import { TreeviewNode } from 'tree-view';

@Component({
  selector: 'emes-opc-servers',
  templateUrl: './opc-servers.component.html',
  styleUrls: ['./opc-servers.component.scss']
})
export class OpcServersComponent implements OnInit, OnDestroy {

  // Menu items
  menuItems: MenuItem[];

  // tree view nodes
  treeViewNodes: TreeviewNode[] = [];

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private opcServerConfigService: OpcServerConfigService,
              private dynamicFormService: DynamicFormService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.opcServerConfigService.opcServers$.pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.menuItems = x.map(opc => ({
        id: opc.id,
        label: opc.name,
        icon: null,
        route: [opc.id],
        children: []
      }));
      const newPageMenuItem: MenuItem = {
        id: 'newPageMenuItemId',
        label: 'New Page',
        icon: faPlus,
        stickyBottom: true,
        onClick: () => this.showCreateNewOpcServer('', '')
      };

      this.treeViewNodes = this.menuItems.map(menuItem => {
          const node = new TreeviewNode(menuItem.id, menuItem.label, 1, null, menuItem.icon, menuItem.badges ? menuItem.badges : [], {
            menuItem,
            route: menuItem.route,
            onClick: menuItem.onClick
          });
          return node;
        }
      );

      this.menuItems.push(newPageMenuItem);

    });

  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  showCreateNewOpcServer(path: string, sectionId: string) {
    const config: ModalConfig = {
      headerText: 'Create a Opc Server',
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: OPCServer) => this.doCreateOpcServer(e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: [
        {
          type: 'input',
          label: 'Name',
          name: 'name',
          placeholder: 'Enter a opc server name',
          validation: [
            CustomValidators.required('Opc Server name required'),
          ]
        },
        {
          type: 'input',
          label: 'Address',
          name: 'address',
          placeholder: 'Enter the address',
          validation: [
            CustomValidators.required('Address required'),
          ]
        },
        {
          type: 'checkbox',
          label: 'Is internal',
          name: 'internal',
          placeholder: 'Is Internal',
          validation: []
        },
        {
          type: 'number',
          label: 'Tcp binding port',
          name: 'tcpPort',
          placeholder: 'Enter the tcp binding port',
          validation: [
            CustomValidators.required('Tcp binding port required'),
          ]
        },
        {
          type: 'number',
          label: 'Https binding port',
          name: 'httpsPort',
          placeholder: 'Enter the https binding port',
          validation: [
            CustomValidators.required('Https binding port required'),
          ]
        },
        {
          type: 'input',
          label: 'Config path',
          name: 'configPath',
          placeholder: 'Enter the config path',
          validation: [
            CustomValidators.required('Config path required'),
          ]
        },
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doCreateOpcServer(opcServer: OPCServer) {
    this.opcServerConfigService.create(opcServer).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

}
