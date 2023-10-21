import {
  Component,
  Injector,
  Input,
  OnInit,
  Optional,
  Self,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

export const ERROR_MESSAGES: any = {
  required: 'This is required',
  minlength: "Value doesn't matches min length",
  email: 'Email format is not correct',
};

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
export class TextControlComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = this.label;
  control!: NgControl;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.control = this.injector.get(NgControl);
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  get errorMessage() {
    if (this.control.errors) {
      const errors = Object.keys(this.control.errors);
      return ERROR_MESSAGES[errors[0]] as string;
    }
    return null;
  }

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
