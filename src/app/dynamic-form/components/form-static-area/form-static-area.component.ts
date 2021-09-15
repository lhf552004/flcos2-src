import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'csps-form-static-area',
  templateUrl: './form-static-area.component.html',
  styleUrls: ['./form-static-area.component.css']
})
export class FormStaticAreaComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
