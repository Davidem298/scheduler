import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  imports: [],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent {
  @Input() id = '';
  @Input() placeholder = '';
  @Input() value = '';

  // These will be assigned by Angular
  onChange = (value: any) => {};
  onTouched = () => {};

  onInput(event: any) {
    const newValue = event.target.value;
    this.value = newValue;
    this.onChange(newValue); // tell Angular the value changed
  }

  // Angular will call this to set the initial value
  writeValue(value: any): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // You can implement this if you want to handle disabled state
  }
}
