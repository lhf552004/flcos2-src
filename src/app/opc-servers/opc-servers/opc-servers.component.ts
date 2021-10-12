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
import {MenuItem} from '../../shared/side-bar/models/menu-items.model';
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

  constructor(private opcServerConfigService: OpcServerConfigService, private route: ActivatedRoute, private router: Router) {
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
    });

  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
