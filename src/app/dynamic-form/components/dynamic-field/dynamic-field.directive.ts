import { Directive, OnChanges, OnInit, ComponentRef, Input, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

import { FormInputComponent } from '../form-input/form-input.component';
import { FormNumberComponent } from '../form-number/form-number.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormCheckboxComponent } from '../form-checkbox/form-checkbox.component';
import { FormCheckboxListComponent } from '../form-checkbox-list/form-checkbox-list.component';
import { FormFileComponent } from '../form-file/form-file.component';
import { FormStaticComponent } from '../form-static/form-static.component';
import { FormStaticAreaComponent } from '../form-static-area/form-static-area.component';
import { FormDateComponent } from '../form-date/form-date.component';
import { FormAreaComponent } from '../form-area/form-area.component';
import { FormButtonComponent } from '../form-button/form-button.component';

const components: { [type: string]: Type<Field> } = {
  input: FormInputComponent,
  number: FormNumberComponent,
  select: FormSelectComponent,
  checkbox: FormCheckboxComponent,
  checkboxList: FormCheckboxListComponent,
  file: FormFileComponent,
  static: FormStaticComponent,
  staticArea: FormStaticAreaComponent,
  date: FormDateComponent,
  area: FormAreaComponent,
  button: FormButtonComponent
}


@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnInit, OnChanges {
  @Input() config: FieldConfig;

  @Input() group: FormGroup;

  component: ComponentRef<Field>;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(`Trying to use an unsupported type (${this.config.type}). Supported types: ${supportedTypes}`);
    }

    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

  ngOnChanges() {
    this.config.typeAhead = this.config.typeAhead || this.defaultTypeAhead;
    this.config.formatter = this.config.formatter || this.defaultFormatter;
    this.config.labelSize = this.config.labelSize != undefined ? this.config.labelSize : 2;

    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  defaultTypeAhead = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(2000),
      distinctUntilChanged(),
      map(term => [])
    );

  defaultFormatter = (x: any) => x;
}
