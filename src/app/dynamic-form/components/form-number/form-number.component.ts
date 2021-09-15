import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';


@Component({
  selector: 'form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.css']
})
export class FormNumberComponent implements Field {

  config: FieldConfig;
  group:FormGroup;

}
