import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalConfig } from './modal-config.interface';

export interface FieldConfig {
  name: string,
  type: 'button' | 'input' | 'number' | 'select' | 'checkbox' | 'checkboxList' | 'file' | 'static' | 'staticArea' | 'date' | 'area',
  label?: string,
  placeholder?: string,
  value?: any,
  disabled?: boolean,
  options?: { key: any, value: string }[],
  sortOptions?: 'asc' | 'desc' | 'none',
  validation?: ValidatorFn[],
  prepend?: any,
  prependConfig?: ModalConfig,
  append?: any,
  appendConfig?: ModalConfig,
  labelSize?: number,
  typeAhead?: (text$: Observable<string>) => Observable<any>,
  formatter?: (x: any) => string,
  checkboxes?: FieldConfig[],  // What is that ?
}
