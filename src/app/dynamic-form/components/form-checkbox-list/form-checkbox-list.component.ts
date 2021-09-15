import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'csps-form-checkbox-list',
  templateUrl: './form-checkbox-list.component.html',
  styleUrls: ['./form-checkbox-list.component.css']
})
export class FormCheckboxListComponent implements Field {

  constructor() { }
  config: FieldConfig;
  group: FormGroup;
}
