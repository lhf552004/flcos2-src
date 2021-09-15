import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { DynamicFormModalComponent } from './containers/dynamic-form-modal/dynamic-form-modal.component';
import { DynamicFormModalLinkDirective } from './containers/dynamic-form-modal-link/dynamic-form-modal-link.directive';

import { DynamicFormTableComponent } from './containers/dynamic-form-table/dynamic-form-table.component';
import { DynamicFormTableModalComponent } from './containers/dynamic-form-table-modal/dynamic-form-table-modal.component';
import { DynamicFormTableModalLinkDirective } from './containers/dynamic-form-table-modal-link/dynamic-form-table-modal-link.directive';

import { DynamicFormNotificationModalComponent } from './containers/dynamic-form-notification-modal/dynamic-form-notification-modal.component';
import { DynamicFormNotificationModalLinkDirective } from './containers/dynamic-form-notification-modal-link/dynamic-form-notification-modal-link.directive';

import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormCheckboxListComponent } from './components/form-checkbox-list/form-checkbox-list.component';
import { FormFileComponent } from './components/form-file/form-file.component';
import { FormStaticComponent } from './components/form-static/form-static.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormStaticAreaComponent } from './components/form-static-area/form-static-area.component';
import { FormAreaComponent } from './components/form-area/form-area.component';



import { FileValueAccessor } from './file-control-value-accessor';

import { CustomValidators } from './validators/custom-validators';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    DynamicFormTableComponent,
    DynamicFormModalComponent,
    DynamicFormTableModalComponent,
    DynamicFormNotificationModalComponent,
    DynamicFormModalLinkDirective,
    DynamicFormTableModalLinkDirective,
    DynamicFormNotificationModalLinkDirective,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    FormCheckboxListComponent,
    FormFileComponent,
    FormStaticComponent,
    FormNumberComponent,
    FormDateComponent,
    FormStaticAreaComponent,
    FormAreaComponent,
    FileValueAccessor,
  ],
  exports: [
    DynamicFormModalLinkDirective,
    DynamicFormTableModalLinkDirective,
    DynamicFormNotificationModalLinkDirective,
    DynamicFieldDirective
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    FormCheckboxListComponent,
    FormFileComponent,
    FormStaticComponent,
    FormNumberComponent,
    FormDateComponent,
    FormStaticAreaComponent,
    FormAreaComponent,
    DynamicFormComponent,
    DynamicFormTableComponent,
    DynamicFormModalComponent,
    DynamicFormTableModalComponent,
    DynamicFormNotificationModalComponent
  ],
  providers: [CustomValidators]
})
export class DynamicFormModule { }
