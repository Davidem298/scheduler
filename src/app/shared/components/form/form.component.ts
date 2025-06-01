import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Signal,
  signal,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ApiPostService,
  ApiGetService,
  ApiPutService,
  ApiDeleteService,
} from '../../../core/services/api';
import { ToastService } from '../../../core/services';
import { Allenamento } from '../../interfaces';
import {
  InputComponent,
  RedirectButtonComponent,
  SelectBoxComponent,
  TextAreaComponent,
  ToastComponent,
} from '..';
import { AllenamentiService } from '../../../core/services/tabelle';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputComponent,
    TextAreaComponent,
    SelectBoxComponent,
    ToastComponent,
    RedirectButtonComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit, OnChanges {
  @Input() formElements!: any;
  @Input() formLabel = '';
  @Input() endpointUrl = '';
  @Input() isLoading = false;
  @Input() modeOptions!: any;

  @Output() onFormSubmit = new EventEmitter<{
    data: any;
    mode: any;
    selectedID: string;
  }>();

  form!: FormGroup;

  mode = signal<'insert' | 'edit' | 'delete'>('insert');
  selectedId = '';
  reloadCounter = 0;

  constructor(
    private fb: FormBuilder,
    private toastSrv: ToastService,
    private apiPostSrv: ApiPostService,
    private apiGetSrv: ApiGetService,
    private apiPutSrv: ApiPutService,
    private apiDelSrv: ApiDeleteService,
    private allenamentiSrv: AllenamentiService
  ) {
    effect(() => {
      const currentLabel = this.getSubmitLabel();
      this.buildForm();
    });
  }

  onSelectionChange(e: any) {
    this.mode.set(e.target.value);
  }

  isInsertMode = () => this.mode() === 'insert';
  isEditMode = () => this.mode() === 'edit';
  isDeleteMode = () => this.mode() === 'delete';

  getSubmitLabel(): string {
    switch (this.mode()) {
      case 'insert':
        return 'Aggiungi';
      case 'edit':
        return 'Modifica';
      case 'delete':
        return 'Elimina';
      default:
        return 'Invia';
    }
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading'] && changes['isLoading'].currentValue) {
      for(let test of this.modeOptions) {
        if(test.realValue === this.mode()) {
          this.toastSrv.showSuccess(test.toastMessage);
        }
      }
    }
  }

  test(e: any) {
    console.log(e);
    const URL = this.endpointUrl + e;
    this.selectedId = e;
    this.apiGetSrv.getOneData<Allenamento>(URL).subscribe({
      next: (MESSAGE: Allenamento) => {
        console.log(MESSAGE);

        this.form.patchValue({
          NOME: MESSAGE['NOME'],
          DESCRIZIONE: MESSAGE['DESCRIZIONE'],
        });
      },
      error: (err) => {
        console.error('Errore nella creazione:', err);
      },
    });
  }

  buildForm() {
    const group: any = {};
    for (const field of this.formElements[this.getSubmitLabel()] ?? []) {
      if (field.required) {
        group[field.name] = new FormControl('', Validators.required);
      } else {
        group[field.name] = new FormControl('');
      }
    }
    this.form = this.fb.group(group);
  }

  onSubmit<T>() {
    const body = this.form.value;

    if (this.form.valid) {
      this.onFormSubmit.emit({
        data: body,
        mode: this.mode(),
        selectedID: this.selectedId,
      });
    }

    this.form.reset();
    this.reloadCounter++; // increment to trigger reload
  }
}
