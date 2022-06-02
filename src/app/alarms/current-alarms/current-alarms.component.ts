import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DataTableSettings, DataTableToolbarControl, DataTableColumnDefinition} from 'data-table';
import {takeUntil} from 'rxjs/operators';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {AlarmService} from '../shared/alarm.service';

@Component({
  selector: 'flcos-current-alarms',
  templateUrl: './current-alarms.component.html',
  styleUrls: ['./current-alarms.component.scss']
})
export class CurrentAlarmsComponent implements OnInit, OnDestroy {
  settings: DataTableSettings;

  // Used for cleaning subscription
  private unsubscribe: Subject<void> = new Subject();

  constructor(private alarmService: AlarmService) {
  }

  ngOnInit(): void {
    const columnDefinition: DataTableColumnDefinition[] = [
      {id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none'},
      {id: '2', name: 'name', label: 'Active', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '3', name: 'start', label: 'Start', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'end', label: 'End', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'messageType', label: 'Message Type', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {id: '4', name: 'message', label: 'Message', type: 'text', visible: true, searchable: false, filterMode: 'text'},
      {
        id: '4',
        name: 'view',
        label: 'View',
        type: 'icon',
        visible: true,
        searchable: false,
        filterMode: 'none',
        click: this.viewAlarm.bind(this)
      }
    ];

    this.alarmService.currentAlarms$.pipe(takeUntil(this.unsubscribe)).subscribe(users => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: columnDefinition,
        data: users.map(t => ({...t, view: faExternalLinkAlt, delete: faTrash})),
        toolBar: {
          right: [
          ]
        },
        groupBy: []
      };
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  viewAlarm() {

  }

}
