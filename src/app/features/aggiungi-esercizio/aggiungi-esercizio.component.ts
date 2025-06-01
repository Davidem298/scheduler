import { Component, signal } from '@angular/core';
import { FormComponent } from '../../shared/components/form-index';
import { EserciziService } from '../../core/services/tabelle';

@Component({
  selector: 'app-aggiungi-esercizio',
  imports: [FormComponent],
  templateUrl: './aggiungi-esercizio.component.html',
  styleUrl: './aggiungi-esercizio.component.css',
})
export class AggiungiEsercizioComponent {
  eserciziFormElements = {
    Aggiungi: [
      {
        elementType: 'input',
        name: 'NOME',
        id: 'NOME',
        placeholder: "Nome dell'esercizio",
        value: '',
        required: true,
      },
      {
        elementType: 'textarea',
        name: 'DESCRIZIONE',
        id: 'DESCRIZIONE',
        placeholder: "Descrizione dell'esercizio",
        value: '',
        required: true,
      },
    ],
    Modifica: [
      {
        elementType: 'select',
        name: 'ID_ESERCIZIO',
        id: 'esercizio',
        endpoint: 'esercizi',
        placeholder: 'Scegli un esercizio',
        keyField: 'ID_ESERCIZIO',
        dataField: 'NOME',
        required: true,
      },
      {
        elementType: 'input',
        name: 'NOME',
        id: 'NOME',
        placeholder: "Nome dell'esercizio",
        value: '',
        required: false,
      },
      {
        elementType: 'textarea',
        name: 'DESCRIZIONE',
        id: 'DESCRIZIONE',
        placeholder: "Descrizione dell'esercizio",
        value: '',
        required: false,
      },
    ],
    Elimina: [
      {
        elementType: 'select',
        name: 'ID_ESERCIZIO',
        id: 'esercizio',
        endpoint: 'esercizi',
        placeholder: 'Scegli un esercizio',
        keyField: 'ID_ESERCIZIO',
        dataField: 'NOME',
        required: true,
      },
    ],
  };

  isLoading = false;
  loading = signal(false); // stato reattivo
  toastMessage = '';
  modeOptions = [
    { label: 'Crea esercizio', realValue: 'insert' },
    { label: 'Modifica esercizio', realValue: 'edit' },
    { label: 'Elimina esercizio', realValue: 'delete' },
  ];

  constructor(private eserciziSrv: EserciziService) {}

  onSubmit(event: { data: any; mode: string; selectedID: string }) {
    this.isLoading = true;

    const MODE = event.mode;
    const DATA = event.data;
    const ID = event.selectedID;

    if (MODE === 'insert') {
      this.eserciziSrv.create(DATA).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
          this.toastMessage = 'Dati aggiunti con successo!';
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore nella creazione:', err);
        },
      });
    } else if (MODE === 'edit') {
      this.eserciziSrv.edit(ID, DATA).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
          this.toastMessage = 'Dati modificati con successo!';
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore durante la modifica:', err);
        },
      });
    } else if (MODE === 'delete') {
      this.eserciziSrv.delete(ID).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
          this.toastMessage = 'Dati eliminati con successo!';
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore durante la cancellazione:', err);
        },
      });
    }
  }
}
