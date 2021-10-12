import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {IconDefinition, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {OPCServer} from '../shared/models/opc-server.model';
import {OpcServerConfigService} from '../shared/opc-server-config.service';
import {takeUntil} from 'rxjs/operators';

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

  opcServer: OPCServer;

  constructor(private opcServerConfigService: OpcServerConfigService) {
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

  nameChanged(x: any) {

  }

  close() {

  }

  save(close: boolean) {

  }

  copy() {

  }

  delete() {

  }

}
