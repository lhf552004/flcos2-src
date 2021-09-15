import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { DynamicFormTableComponent } from '../dynamic-form-table/dynamic-form-table.component';
import { ModalConfig } from '../../models/modal-config.interface';

@Component({
  selector: 'csps-dynamic-form-table-modal',
  templateUrl: './dynamic-form-table-modal.component.html',
  styleUrls: ['./dynamic-form-table-modal.component.css']
})
export class DynamicFormTableModalComponent implements AfterViewInit, OnInit, OnChanges {
  @ViewChild(DynamicFormTableComponent) form: DynamicFormTableComponent;

  @Input()
  config: ModalConfig;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.config.fields.forEach(x => x.labelSize = 0)
  }

  ngOnChanges() {
    this.config.fields.forEach(x => x.labelSize = 0)
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

  submitForm(event: any) {
    this.submitted.emit(this.form.value);
  }

  dismissForm(method: any) {
    this.dismissed.emit(method);
  }
}
