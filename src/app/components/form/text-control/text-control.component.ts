import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'ms-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextControlComponent),
      multi: true,
    },
  ],
})
export class TextControlComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = this.label;

  value!: string;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleChange(target: any) {
    this.value = target.value;
    this.onChange(target.value);
  }

}
