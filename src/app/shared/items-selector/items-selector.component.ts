import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';

@Component({
  selector: 'flcos-items-selector',
  templateUrl: './items-selector.component.html',
  styleUrls: ['./items-selector.component.scss']
})
export class ItemsSelectorComponent implements OnInit, OnChanges {
  @Input() config: {
    items: any[],
    columnDefinitions: DataTableColumnDefinition[],
    left: DataTableToolbarControl[],
    right: DataTableToolbarControl[],
    name: string
  };

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dismissed: EventEmitter<any> = new EventEmitter<any>();

  // Indicate roles selected
  itemsSelected = false;

  // The datatable settings
  settings: DataTableSettings;

  // The list of group members, name and description of the group.
  // A deep copy of the config.group object is needed in case user decide to cancel the form
  items: any[] = [];

  selectedItems: any[] = [];

  constructor() {
  }


  ngOnInit(): void {
    this.buildTableSettings();
  }

  ngOnChanges(): void {
    this.buildTableSettings();
  }

  buildTableSettings(): void {
    this.items = this.config.items;
    console.log(this.items);
    this.settings = {
      selectableRows: true,
      columnDefinitions: this.config.columnDefinitions,
      data: this.items,
      toolBar: {
        left: this.config.left,
        right: this.config.right
      },
      groupBy: []
    };
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
