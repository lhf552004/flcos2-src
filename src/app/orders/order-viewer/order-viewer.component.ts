import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {OrderAttribute} from '../shared/models/order-attribute.model';

@Component({
  selector: 'flcos-order-viewer',
  templateUrl: './order-viewer.component.html',
  styleUrls: ['./order-viewer.component.scss']
})
export class OrderViewerComponent implements OnInit, OnChanges {
  myContext = 'hello';
  @Input() config: {
    attributes: {
      [key: string]: OrderAttribute
    }
  };

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  // Indicate roles selected
  itemsSelected = false;


  // The list of group members, name and description of the group.
  // A deep copy of the config.group object is needed in case user decide to cancel the form
  items: any[] = [];

  selectedItems: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.config.attributes);
  }

  ngOnChanges(): void {

  }

  selectItems(rows: any[]) {
    this.selectedItems = this.items.filter(r => rows.map(x => x.data.id).includes(r.id));
    if (this.selectedItems.length > 0) {
      this.itemsSelected = true;
    } else {
      this.itemsSelected = false;
    }
  }

  submitForm(method: string) {
    this.submitted.emit(this.selectedItems);
  }

  dismissForm(method: string) {
    this.dismissed.emit(method);
  }

}
