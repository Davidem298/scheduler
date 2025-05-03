import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiGetService } from '../../../core/services/api';

@Component({
  selector: 'app-select-box',
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectBoxComponent,
      multi: true
    }
  ],
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.css'
})
export class SelectBoxComponent implements OnInit, ControlValueAccessor {
  @Input() id = '';
  @Input() placeholder = '';
  @Input() options = '';
  @Input() keyField = '';
  @Input() dataField = '';
  @Output() selectionChanged = new EventEmitter<string>();

  selectOptions: any[] = [];

  value: any;
  isDisabled = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(private apiGetSrv: ApiGetService) {}

  ngOnInit() {
    if (this.options) {
      this.apiGetSrv.getData<any[]>(this.options).subscribe({
        next: (data) => {
          this.selectOptions = data;
        },
        error: (err) => {
          console.error('Errore nel caricamento delle opzioni:', err);
        }
      });
    }
  }

  getOptionValue(option: any) {
    return option[this.keyField];
  }

  getOptionLabel(option: any) {
    return option[this.dataField];
  }


  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onValueChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();

    this.selectionChanged.emit(this.value);
  }
}
