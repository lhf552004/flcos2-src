import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationConfig } from '../../models/notification-config.interface';

@Component({
  selector: 'csps-dynamic-form-notification-modal',
  templateUrl: './dynamic-form-notification-modal.component.html',
  styleUrls: ['./dynamic-form-notification-modal.component.css']
})
export class DynamicFormNotificationModalComponent implements OnInit {
  @Input()
  config: NotificationConfig;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  submitForm(method: any) {
    this.submitted.emit(method);
  }

  dismissForm(method: any) {
    this.dismissed.emit(method);
  }
}
