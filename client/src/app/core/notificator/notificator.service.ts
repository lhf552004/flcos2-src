import {Injectable} from '@angular/core';
import {Notification} from './notification.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificatorService {
  // The notifications subject to subscribe to
  private notificationsSubject: BehaviorSubject<Notification[]>;
  // The list of notifications
  private notifications: Notification[] = [];

  constructor() {
    // Instantiate the notification subject with an empty array
    this.notificationsSubject = new BehaviorSubject<Notification[]>([]);
  }

  // Returns an observable of notifications
  getNotifications(): Observable<Notification[]> {
    return this.notificationsSubject.asObservable();
  }

  // Creates a new notification
  sendNotification(notif: Notification, observable?: Observable<any>): void {
    // TODO: Using the length as the id will cause issues if notifications are dismissed and added simultaneously
    // Investigate another method to assign an id with random numbers
    notif.id = this.notifications.length;
    this.notifications.push(notif);
    this.notificationsSubject.next([...this.notifications]);

    if (observable) {
      // Notification close according to observable
      observable.subscribe(() => this.dismissNotification(notif.id));
    } else {
      // Notification auto-close after 10 sec
      setTimeout(() => this.dismissNotification(notif.id), 10000);
    }
  }

  // Dismisses the specified notification
  dismissNotification(id: number) {
    this.notifications = this.notifications.filter(x => x.id !== id);
    this.notificationsSubject.next([...this.notifications]);
  }
}
