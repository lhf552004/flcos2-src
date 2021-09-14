import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {DataTableSettings, DataTableColumnDefinition, DataTableToolbarControl} from 'data-table';

@Component({
  selector: 'emes-items-selector',
  templateUrl: './items-selector.component.html',
  styleUrls: ['./items-selector.component.scss']
})
export class ItemsSelectorComponent implements OnInit, OnChanges {
  @Input() config: { items: any[], name: string };

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
    const columnDefinition: DataTableColumnDefinition[] = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: true, filterMode: 'none'},
      {id: '2', name: 'name', label: this.config.name, type: 'text', visible: true, searchable: true, filterMode: 'select'}
    ];

    this.settings = {
      selectableRows: true,
      columnDefinitions: columnDefinition,
      data: this.items,
      toolBar: {
        left: [{name: 'Select', type: 'button', callback: this.selectItems.bind(this)} as DataTableToolbarControl],
        right: [{type: 'search'} as DataTableToolbarControl]
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
