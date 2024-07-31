import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Equipment} from '../shared/models/equipment.model';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {EquipmentService} from '../shared/equipment.service';
import {DynamicFormService, ModalConfig, CustomValidators} from 'dynamic-form';
import {DataTableColumnDefinition, DataTableSettings, DataTableToolbarControl} from 'data-table';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Line} from '../shared/models/line.model';
import {FieldConfig} from 'dynamic-form/lib/models/field-config.interface';
import {GcObject} from '../shared/models/gc-object.model';

export abstract class EquipmentsComponent<T extends GcObject> implements OnInit, OnDestroy {
  settings: DataTableSettings;
  isAdmin = true;
  equipmentService: EquipmentService<T>;
  private dynamicFormService: DynamicFormService;
  equipments: Equipment[];
  columnDefinitions: DataTableColumnDefinition[];
  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  protected constructor(equipmentService: EquipmentService<T>, dynamicFormService: DynamicFormService) {
    this.equipmentService = equipmentService;
    this.dynamicFormService = dynamicFormService;
  }

  ngOnInit(): void {
    this.equipmentService.equipments$.pipe(takeUntil(this.unsubscribe)).subscribe(equipments => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: this.getColumnDefinitions(),
        data: equipments.map(l => ({
          ...l,
          view: faExternalLinkAlt,
          viewChildren: faExternalLinkAlt,
          delete: faTrash
        })),
        toolBar: {
          right: [
            ...this.isAdmin ? [{
              name: this.getHeaderForNew(),
              type: 'button',
              icon: faPlus,
              callback: this.create.bind(this)
            } as DataTableToolbarControl] : [],
            {type: 'filter'} as DataTableToolbarControl
          ]
        },
        groupBy: []
      };
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  abstract getColumnDefinitions(): DataTableColumnDefinition[];

  abstract getHeaderForNew(): string;

  abstract getHeaderForView(): string;

  abstract getHeaderForDelete(): string;

  abstract getFields(): FieldConfig[];

  abstract getDefaultProperties(): any;

  abstract getEquipmentName(): string;

  create() {
    const config: ModalConfig = {
      headerText: this.getHeaderForNew(),
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: any) => this.doCreate(e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: this.getFields()
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doCreate(newEquipment: any): void {
    this.equipmentService.create(newEquipment, this.getDefaultProperties()).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  view(equipment: T) {
    const config: ModalConfig = {
      headerText: this.getHeaderForView(),
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: any) => this.doUpdate(equipment, e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: this.getFields()
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doUpdate(existed: T, e: T): void {
    const names = Object.getOwnPropertyNames(e);
    names.forEach(curName => {
      existed[curName] = e[curName];
    });
    this.equipmentService.update(existed.id, existed).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  delete(equip: T) {
    const config = {
      headerText: this.getHeaderForDelete(),
      submitText: 'Ok',
      closeText: 'Cancel',
      onSubmit: () => this.doDelete(equip),
      onDismiss: () => {
      },
      notifications: [`Are you Sure you want to delete ${this.getEquipmentName()} '${equip.id}'?`]
    };
    this.dynamicFormService.popNotification(config);
  }

  doDelete(equip: T) {
    this.equipmentService.delete(equip.id).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
    });
  }
}
