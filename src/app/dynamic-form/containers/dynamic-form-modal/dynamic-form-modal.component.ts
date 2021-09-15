import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { ModalConfig } from '../../models/modal-config.interface';

@Component({
  selector: 'csps-dynamic-form-modal',
  templateUrl: './dynamic-form-modal.component.html',
  styleUrls: ['./dynamic-form-modal.component.css']
})
export class DynamicFormModalComponent implements AfterViewInit, OnInit, OnChanges {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  @Input()
  config: ModalConfig;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() { 
    if (this.config.labelSize != null) // Need to catch null or undefined, hence using != and not !==
      this.config.fields.forEach(x => x.labelSize = this.config.labelSize)
  }

  ngOnChanges() {
    if (this.config.labelSize != null) // Need to catch null or undefined, hence using != and not !==
      this.config.fields.forEach(x => x.labelSize = this.config.labelSize)
  }

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });
  }

  submitForm(method: any) {
    this.submitted.emit(this.form.value);
  }

  dismissForm(method: any) {
    this.dismissed.emit(method);
  }
}
