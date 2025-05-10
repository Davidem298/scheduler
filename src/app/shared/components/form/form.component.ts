import { CommonModule } from '@angular/common';
import { Component, effect, Input, OnInit, signal } from '@angular/core';
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
export class FormComponent implements OnInit {
  @Input() formElements!: any;
  @Input() formLabel = '';
  @Input() endpointUrl = '';

  form!: FormGroup;
  isLoading = false;
  modeOptions = [
    'Crea allenamento',
    'Modifica allenamento',
    'Elimina allenamento',
  ];
  mode = signal<
    'Crea allenamento' | 'Modifica allenamento' | 'Elimina allenamento'
  >('Crea allenamento');
  selectedId = '';
  reloadCounter = 0;

  constructor(
    private fb: FormBuilder,
    private toastSrv: ToastService,
    private apiPostSrv: ApiPostService,
    private apiGetSrv: ApiGetService,
    private apiPutSrv: ApiPutService,
    private apiDelSrv: ApiDeleteService,
    private allenamentiSrv: AllenamentiService,
  ) {
    effect(() => {
      const currentLabel = this.getSubmitLabel();
      this.buildForm();
    });
  }

  onSelectionChange(e: any) {
    this.mode.set(e.target.value);
  }

  isInsertMode = () => this.mode() === 'Crea allenamento';
  isEditMode = () => this.mode() === 'Modifica allenamento';
  isDeleteMode = () => this.mode() === 'Elimina allenamento';

  getSubmitLabel(): string {
    switch (this.mode()) {
      case 'Crea allenamento':
        return 'Aggiungi';
      case 'Modifica allenamento':
        return 'Modifica';
      case 'Elimina allenamento':
        return 'Elimina';
      default:
        return 'Invia';
    }
  }

  ngOnInit() {
    this.buildForm();
  }

  test(e: any) {
    console.log(e);
    const URL = 'allenamenti/' + e;
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
    this.isLoading = true;
    console.log('dati da evento ', this.form.value);

    const body = this.form.value as T;

    if (this.isInsertMode()) {
      this.apiPostSrv.postData<T>(this.endpointUrl, body).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
          this.toastSrv.showSuccess('Dati aggiunti con successo!');
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore nella creazione:', err);
        },
      });
    } else if (this.isEditMode()) {
      const URL = this.endpointUrl + this.selectedId;
      this.apiPutSrv.putData<T>(URL, body).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
          this.toastSrv.showSuccess('Dati modificati con successo!');
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore durante la modifica:', err);
        },
      });
    } else if (this.isDeleteMode()) {
      const URL = this.endpointUrl + this.selectedId;
      this.apiDelSrv.deleteData(URL).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
          this.toastSrv.showSuccess('Dati eliminati con successo!');
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore durante la cancellazione:', err);
        },
      });
    }

    this.form.reset();
    this.reloadCounter++; // increment to trigger reload
  }
}
