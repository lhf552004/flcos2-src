import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: 'input[type=file]',
  host: {
    '(change)': 'onChange($event.target.files[0])',  // Only considering the first file in the file list as the input value
    '(blur)': 'onTouched()'
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true }
  ]
})
export class FileValueAccessor implements ControlValueAccessor {
  value: any;
  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(value: any) { }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
}