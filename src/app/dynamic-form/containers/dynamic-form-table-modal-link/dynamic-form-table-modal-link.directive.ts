import { Directive, Input, HostListener } from '@angular/core';
import { ModalConfig } from '../../models/modal-config.interface';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormTableModalComponent } from '../dynamic-form-table-modal/dynamic-form-table-modal.component';

@Directive({
  selector: '[cspsDynamicFormTableModalLink]'
})
export class DynamicFormTableModalLinkDirective {
  @Input() config: ModalConfig;

  private modalRef: NgbModalRef;

  @HostListener('click') onClick() {
    this.instantiateModal();
  }

  constructor(private modalService: NgbModal) { }

  private instantiateModal(): void {
    this.config.size = this.config.size || 'lg'; // Default to large modal
    this.config.backdrop = this.config.backdrop || 'static'; // Default to static background
    this.config.windowClass = this.config.windowClass || '';

    this.modalRef = this.modalService.open(DynamicFormTableModalComponent, { size: this.config.size, backdrop: this.config.backdrop, windowClass: this.config.windowClass });
    this.modalRef.componentInstance.config = this.config;
    this.modalRef.componentInstance.submitted.subscribe(($e:any) => {
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
