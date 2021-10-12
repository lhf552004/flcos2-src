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

@Component({
  selector: 'emes-opc-servers',
  templateUrl: './opc-servers.component.html',
  styleUrls: ['./opc-servers.component.scss']
})
export class OpcServersComponent implements OnInit, OnDestroy {

  // Menu items
  menuItems: MenuItem[];

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
      onSubmit: (e: { name: string, endpointUrl: string }) => this.doCreateOpcServer(e),
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
          label: 'Endpoint url',
          name: 'endpointUrl',
          placeholder: 'Enter the endpoint url',
          validation: [
            CustomValidators.required('Endpoint url required'),
          ]
        }
      ]
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doCreateOpcServer(e: { name: string, endpointUrl: string }) {
    this.opcServerConfigService.create(e.name, e.endpointUrl).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

}
