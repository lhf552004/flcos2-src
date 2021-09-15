import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-file',
  templateUrl: './form-file.component.html',
  styleUrls: ['./form-file.component.css']
})
export class FormFileComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
  label: string = "Choose file";

  public onFileChange($event: any) {
    if ($event.target && $event.target.files) {
      let file = $event.target.files[0];
      this.label = file ? file.name : 'Choose file';
    }
    else {
      this.label = 'Choose file';
    }
  }
}
