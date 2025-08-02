import { Component, signal } from '@angular/core';
import { FormComponent } from '../../shared/components/form-index';
import { AllenamentiService } from '../../core/services/tabelle';

@Component({
  selector: 'app-gestione-allenamenti',
  imports: [FormComponent],
  templateUrl: './gestione-allenamenti.component.html',
  styleUrl: './gestione-allenamenti.component.css',
})
export class AggiungiAllenamentoComponent {
  addAllenamentoFormElements = {
    Aggiungi: [
      {
        elementType: 'input',
        name: 'NOME',
        id: 'NOME',
        placeholder: "Nome dell'allenamento",
        value: '',
        required: true,
      },
      {
        elementType: 'textarea',
        name: 'DESCRIZIONE',
        id: 'DESCRIZIONE',
        placeholder: "Descrizione dell'allenamento",
        value: '',
        required: true,
      },
    ],
    Modifica: [
      {
        elementType: 'select',
        name: 'ID_ALLENAMENTO',
        id: 'allenamento',
        endpoint: 'allenamenti',
        placeholder: 'Scegli un allenamento',
        keyField: 'ID_ALLENAMENTO',
        dataField: 'NOME',
        required: true,
      },
      {
        elementType: 'input',
        name: 'NOME',
        id: 'NOME',
        placeholder: "Nome dell'allenamento",
        value: '',
        required: false,
      },
      {
        elementType: 'textarea',
        name: 'DESCRIZIONE',
        id: 'DESCRIZIONE',
        placeholder: "Descrizione dell'allenamento",
        value: '',
        required: false,
      },
    ],
    Elimina: [
      {
        elementType: 'select',
        name: 'ID_ALLENAMENTO',
        id: 'allenamento',
        endpoint: 'allenamenti',
        placeholder: 'Scegli un allenamento',
        keyField: 'ID_ALLENAMENTO',
        dataField: 'NOME',
        required: true,
      },
    ],
  };

  constructor(private allenamentiSrv: AllenamentiService) {}

  isLoading = false;
  loading = signal(false); // stato reattivo
  modeOptions = [
    { label: 'Crea allenamento', realValue: 'insert', toastMessage: 'Allenamento aggiunto con successo!'  },
    { label: 'Modifica allenamento', realValue: 'edit', toastMessage: 'Allenamento modificato con successo!'  },
    { label: 'Elimina allenamento', realValue: 'delete', toastMessage: 'Allenamento eliminato con successo!'  },
  ];

  onSubmit(event: { data: any; mode: string; selectedID: string }) {
    this.isLoading = true;

    const MODE = event.mode;
    const DATA = event.data;
    const ID = event.selectedID;

    if (MODE === 'insert') {
      this.allenamentiSrv.create(DATA).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore nella creazione:', err);
        },
      });
    } else if (MODE === 'edit') {
      this.allenamentiSrv.edit(ID, DATA).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore durante la modifica:', err);
        },
      });
    } else if (MODE === 'delete') {
      this.allenamentiSrv.delete(ID).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore durante la cancellazione:', err);
        },
      });
    }
  }
}
