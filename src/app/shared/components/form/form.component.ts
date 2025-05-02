import { CommonModule } from '@angular/common';
import { Component, effect, Input, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastComponent, SelectBoxComponent, RedirectButtonComponent, TextAreaComponent, InputComponent } from '../';
import { ToastService } from '../../../core/services';
import { ApiPostService } from '../../../core/services/api';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent, TextAreaComponent, SelectBoxComponent, ToastComponent, RedirectButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent<T extends object> implements OnInit {
  @Input() formElements!: any;
  @Input() formLabel = '';
  @Input() endpointUrl = '';

  form!: FormGroup;
  isLoading = false;
  modeOptions = ['Inserisci allenamento', 'Modifica allenamento', 'Elimina allenamento'];
  mode = signal<'Inserisci allenamento' | 'Modifica allenamento' | 'Elimina allenamento'>('Inserisci allenamento');

  constructor(
    private fb: FormBuilder,
    private apiPostSrv: ApiPostService,
    private toastSrv: ToastService
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


  buildForm() {
    const group: any = {};
    for (const field of this.formElements[this.getSubmitLabel()] ?? []) {
      group[field.name] = new FormControl('', Validators.required); // or adjust based on field config
    }
    this.form = this.fb.group(group);
  }

  onSubmit() {
    this.isLoading = true;
    console.log('dati da evento ', this.form.value);

    const body = this.form.value as T;

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

    this.form.reset();
  }
}
