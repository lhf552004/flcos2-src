import { Directive, Input, HostListener } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DynamicFormNotificationModalComponent } from '../dynamic-form-notification-modal/dynamic-form-notification-modal.component';
import { NotificationConfig } from '../../models/notification-config.interface';

@Directive({
  selector: '[cspsDynamicFormNotificationModalLink]'
})
export class DynamicFormNotificationModalLinkDirective {
  @Input() config: NotificationConfig;

  private modalRef: NgbModalRef;

  @HostListener('click') onClick() {
    this.instantiateModal();

  }
  constructor(private modalService: NgbModal) { }

  private instantiateModal(): void {
    this.config.size = this.config.size || 'lg'; // Default to large modal
    this.config.backdrop = this.config.backdrop || 'static'; // Default to static background
    this.config.windowClass = this.config.windowClass || '';

    this.modalRef = this.modalService.open(DynamicFormNotificationModalComponent, { size: this.config.size, backdrop: this.config.backdrop, windowClass: this.config.windowClass });
    this.modalRef.componentInstance.config = this.config;
    this.modalRef.componentInstance.submitted.subscribe(($e: any) => {
      this.submitModal($e);
    })
    this.modalRef.componentInstance.dismissed.subscribe(($e: any) => {
      this.dismissModal($e);
    })
  }

  private submitModal(event: Event): void {
    this.modalRef.close();
    if (this.config.onSubmit)
      this.config.onSubmit(event);
  }

  private dismissModal(event: Event): void {
    this.modalRef.close();
    if (this.config.onDismiss)
      this.config.onDismiss(event);
  }
}
