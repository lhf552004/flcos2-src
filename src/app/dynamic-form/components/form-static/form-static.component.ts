import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-static',
  templateUrl: 'form-static.component.html',
  styleUrls: ['form-static.component.css']
})
export class FormStaticComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}