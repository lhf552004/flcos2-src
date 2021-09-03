import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'emes-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit, OnChanges {
  @Input() config: {
    storage: any
  };

  storage: any;
  selectedType: any;
  selectedProduct: any;
  products: any[];
  types: any[];

  // Event Emitters
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() dismissed: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.storage = this.config.storage;
  }

  ngOnChanges(): void {

  }

  submitForm(event): void {
    this.submitted.emit(null);
  }

  // Dismiss the modal form
  dismissForm(method): void {
    this.dismissed.emit(method);
  }

  productSelected(): void {

  }

  typeSelected(): void {

  }

  nameChanged(name: any): void {

  }
}
