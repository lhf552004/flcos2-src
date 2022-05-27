import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DynamicFormService, ModalConfig} from 'dynamic-form';
import {DataTableColumnDefinition, DataTableSettings, DataTableToolbarControl} from 'data-table';
import {faExternalLinkAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FieldConfig} from 'dynamic-form/lib/models/field-config.interface';
import {GenericBaseService} from './services/generic-base.service';
import {Base} from './models/base.model';

export abstract class BaseObjectsComponent<T extends Base> implements OnInit, OnDestroy {
  settings: DataTableSettings;
  isAdmin = true;
  genericBaseService: GenericBaseService<T>;
  private dynamicFormService: DynamicFormService;
  columnDefinitions: DataTableColumnDefinition[];
  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  protected constructor(genericBaseService: GenericBaseService<T>, dynamicFormService: DynamicFormService) {
    this.genericBaseService = genericBaseService;
    this.dynamicFormService = dynamicFormService;
  }

  ngOnInit(): void {
    this.genericBaseService.objects$.pipe(takeUntil(this.unsubscribe)).subscribe(objects => {
      this.settings = {
        selectableRows: false,
        columnDefinitions: this.getColumnDefinitions(),
        data: objects.map(l => ({
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

  abstract getFields(object: T): FieldConfig[];

  abstract getDefaultProperties(): any;

  abstract getObjectTypeName(): string;

  create() {
    const config: ModalConfig = {
      headerText: this.getHeaderForNew(),
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: any) => this.doCreate(e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: this.getFields(null)
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doCreate(newObject: any): void {
    this.genericBaseService.create(newObject, this.getDefaultProperties()).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  view(object: T) {
    const config: ModalConfig = {
      headerText: this.getHeaderForView(),
      submitText: 'OK',
      closeText: 'Cancel',
      onSubmit: (e: any) => this.doUpdate(object, e),
      onDismiss: (e: string) => {
      },
      extraButtons: [],
      fields: this.getFields(object)
    };
    this.dynamicFormService.popDynamicFormModal(config);
  }

  doUpdate(existed: T, e: T): void {
    const names = Object.getOwnPropertyNames(e);
    names.forEach(curName => {
      existed[curName] = e[curName];
    });
    this.genericBaseService.update(existed.id, existed).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  delete(object: T) {
    const config = {
      headerText: this.getHeaderForDelete(),
      submitText: 'Ok',
      closeText: 'Cancel',
      onSubmit: () => this.doDelete(object),
      onDismiss: () => {
      },
      notifications: [`Are you Sure you want to delete ${this.getObjectTypeName()} '${object.id}'?`]
    };
    this.dynamicFormService.popNotification(config);
  }

  doDelete(equip: T) {
    this.genericBaseService.delete(equip.id).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
    });
  }
}
