import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {IconDefinition, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {OPCServer} from '../shared/models/opc-server.model';
import {OpcServerConfigService} from '../shared/opc-server-config.service';
import {takeUntil} from 'rxjs/operators';
import {Role} from '../../core/user/models/role.model';
import {DynamicFormService} from 'dynamic-form';
import {Notification} from '../../core/notificator/notification.model';
import {NotificatorService} from '../../core/notificator/notificator.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'emes-opc-server',
  templateUrl: './opc-server.component.html',
  styleUrls: ['./opc-server.component.scss']
})
export class OpcServerComponent implements OnInit, OnDestroy {
  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();
  isAuthor: boolean;
  isOwner: boolean;
  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;

  // Indicator whether current opc server configuration is changed
  isChanged = false;

  opcServer: OPCServer;

  constructor(private opcServerConfigService: OpcServerConfigService,
              private dynamicFormService: DynamicFormService,
              private notificatorService: NotificatorService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.opcServerConfigService.opcServer$.pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.opcServer = x;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  nameChanged() {
    this.isChanged = true;
  }

  endPointUrlChanged() {
    this.isChanged = true;
  }

  save() {
    this.opcServerConfigService.update(this.opcServer.id, this.opcServer).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.isChanged = false;
      this.notificatorService.sendNotification(new Notification('Save successfully', 'info'));
    }, error => {
      this.notificatorService.sendNotification(new Notification('Save failed', 'danger'));
    });
  }

  copy() {
    this.opcServerConfigService.create(this.opcServer.name + '- copy', this.opcServer.endpointUrl)
      .pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.notificatorService.sendNotification(new Notification('Copy successfully with ' + this.opcServer.name + '- copy', 'info'));
    });
  }

  delete() {
    const config = {
      headerText: 'Delete Opc Server',
      submitText: 'Ok',
      closeText: 'Cancel',
      onSubmit: () => this.doDeleteOPCServer(),
      onDismiss: () => {
      },
      notifications: [
        'Are you sure to delete the opc server?',
        this.opcServer.name
      ]
    };
    this.dynamicFormService.popNotification(config);
  }

  doDeleteOPCServer() {
    this.opcServerConfigService.delete(this.opcServer.id).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.notificatorService.sendNotification(new Notification('OPC Server ' + this.opcServer.name + ' is deleted', 'info'));
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }

}
