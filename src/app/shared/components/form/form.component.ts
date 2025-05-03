import { CommonModule } from '@angular/common';
import { Component, effect, Input, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiPostService, ApiGetService, ApiPutService } from '../../../core/services/api';
import { ToastService } from '../../../core/services';

import { InputComponent } from '../input/input.component';
import { TextAreaComponent } from '../text-area/text-area.component';
import { RedirectButtonComponent } from '../redirect-button/redirect-button.component';
import { SelectBoxComponent } from '../select-box/select-box.component';
import { ToastComponent } from '../toast/toast.component';
import { Allenamento } from '../../interfaces';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent, TextAreaComponent, SelectBoxComponent, ToastComponent, RedirectButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent<T> implements OnInit {
  @Input() formElements!: any;
  @Input() formLabel = '';
  @Input() endpointUrl = '';

  form!: FormGroup;
  isLoading = false;
  modeOptions = ['Inserisci allenamento', 'Modifica allenamento', 'Elimina allenamento'];
  mode = signal<'Inserisci allenamento' | 'Modifica allenamento' | 'Elimina allenamento'>('Inserisci allenamento');
  selectedId = '';

  constructor(
    private fb: FormBuilder,
    private apiPostSrv: ApiPostService,
    private toastSrv: ToastService,
    private apiGetSrv: ApiGetService,
    private apiPutSrv: ApiPutService
  ) {
    effect(() => {
      const currentLabel = this.getSubmitLabel();
      this.buildForm();
    });
  }

  onSelectionChange(e: any) {
    this.mode.set(e.target.value);
  }

  isInsertMode = () => this.mode() === 'Inserisci allenamento';
  isEditMode = () => this.mode() === 'Modifica allenamento';
  isDeleteMode = () => this.mode() === 'Elimina allenamento';

  getSubmitLabel(): string {
    switch (this.mode()) {
      case 'Inserisci allenamento': return 'Aggiungi';
      case 'Modifica allenamento': return 'Modifica';
      case 'Elimina allenamento': return 'Elimina';
      default: return 'Invia';
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
        this.formElements['Modifica'][1]['value'] = MESSAGE['NOME'];
        this.formElements['Modifica'][2]['value'] = MESSAGE['DESCRIZIONE'];

      },
      error: (err) => {
        console.error('Errore nella creazione:', err);
      }
    });
  }

  buildForm() {
    const group: any = {};
    for (const field of this.formElements[this.getSubmitLabel()] ?? []) {
      if(field.required) {
        group[field.name] = new FormControl('', Validators.required);
      } else {
        group[field.name] = new FormControl('');
      }
    }
    this.form = this.fb.group(group);
  }

  onSubmit() {
    this.isLoading = true;
    console.log('dati da evento ', this.form.value);

    const body = this.form.value as T;

    if(this.isInsertMode()) {
      this.apiPostSrv.postData<T>(this.endpointUrl, body).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
          this.toastSrv.showSuccess('Dati aggiunti con successo!');
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore nella creazione:', err);
        }
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
        }
      })
    }

    this.form.reset();
  }
}
