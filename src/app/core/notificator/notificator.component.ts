import {Component, HostBinding, OnInit} from '@angular/core';

import {NotificatorService} from './notificator.service';
import {Notification} from './notification.model';

@Component({
  selector: 'emes-notificator',
  templateUrl: './notificator.component.html',
  styleUrls: ['./notificator.component.css'],
  host: {
    class: 'notification-wrapper'
  }
})
export class NotificatorComponent implements OnInit {
  notifications: Notification[] = [];
  constructor(private notificatorService: NotificatorService) {
  }

  ngOnInit() {
    // Subscribe to the notification service to receive notifications
    this.notificatorService.getNotifications().subscribe(
      notifs => this.notifications = notifs
    );
  }

  // Close the specified notification
  closeNotification(id: number) {
    this.notificatorService.dismissNotification(id);
  }
}
