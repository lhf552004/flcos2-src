import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpcNode} from '../../shared/models/opc-node.model';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {OpcServerService} from '../../shared/services/opc-server.service';
import {NotificatorService} from '../../core/notificator/notificator.service';
import {Notification} from '../../core/notificator/notification.model';

@Component({
  selector: 'flcos-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss']
})
export class DiagnosticComponent implements OnInit, OnDestroy {
  opcNode: OpcNode;
// Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();
  // Indicator whether the value is changed
  isChanged = false;

  constructor(private opcServerService: OpcServerService,
              private notificatorService: NotificatorService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.opcNode = x.node;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  fresh() {
    this.opcServerService.getOPCNode(this.opcNode.nodeId, this.opcNode.nodeClass).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.opcNode = x;
    });
  }

  save() {
    this.opcServerService.writeVariableNode(this.opcNode.nodeId, this.opcNode.value).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.isChanged = false;
      this.notificatorService.sendNotification(new Notification('OPC variable node value ' + this.opcNode.nodeId + ' has been updated', 'info'));
    });
  }

  valueChanged() {
    this.isChanged = true;
  }
}
