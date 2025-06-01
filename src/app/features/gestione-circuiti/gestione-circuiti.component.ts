import { Component, signal } from '@angular/core';
import { FormComponent } from '../../shared/components/form-index';
import { CircuitiService } from '../../core/services/tabelle';

@Component({
  selector: 'app-gestione-circuiti',
  imports: [FormComponent],
  templateUrl: './gestione-circuiti.component.html',
  styleUrl: './gestione-circuiti.component.css',
})
export class GestioneCircuitiComponent {
  formElements = {
    Aggiungi: [
      {
        elementType: 'select',
        name: 'ID_ALLENAMENTO',
        id: 'allenamento',
        endpoint: 'allenamenti',
        placeholder: 'Scegli un allenamento',
        keyField: 'ID_ALLENAMENTO',
        dataField: 'NOME',
      },
      {
        elementType: 'select',
        name: 'ID_ESERCIZIO',
        id: 'esercizio',
        endpoint: 'esercizi',
        placeholder: 'Scegli un esercizio',
        keyField: 'ID_ESERCIZIO',
        dataField: 'NOME',
      },
      {
        elementType: 'input',
        type: 'number',
        name: 'NUM_SET',
        id: 'numSet',
        placeholder: 'Numero di set',
      },
      {
        elementType: 'input',
        type: 'number',
        name: 'NUM_REP',
        id: 'numRep',
        placeholder: 'Numero di ripetizioni',
      },
      {
        elementType: 'select',
        name: 'ID_UM',
        id: 'unitaMisura',
        endpoint: 'unitaMisura',
        placeholder: 'Scegli ripetizioni/secondi',
        keyField: 'ID_UM',
        dataField: 'NOME',
      },
      {
        elementType: 'input',
        type: 'number',
        name: 'PESO',
        id: 'peso',
        placeholder: 'Carico (Kg)',
      },
      {
        elementType: 'input',
        type: 'number',
        name: 'RIPOSO_SET',
        id: 'riposoSet',
        placeholder: 'Riposo tra set (sec)',
      },
      {
        elementType: 'input',
        type: 'number',
        name: 'RIPOSO_ESERCIZI',
        id: 'riposoEx',
        placeholder: 'Riposo tra esercizi (sec)',
      },
      {
        elementType: 'input',
        type: 'number',
        name: 'INDICE',
        id: 'indice',
        placeholder: 'Indice (ordine della sequenza)',
      },
    ],
  };

  constructor(private circuitiSrv: CircuitiService) {}

  isLoading = false;
  loading = signal(false); // stato reattivo
  modeOptions = [
    {
      label: 'Crea circuito',
      realValue: 'insert',
      toastMessage: 'Circuito aggiunto con successo!',
    },
    {
      label: 'Modifica circuito',
      realValue: 'edit',
      toastMessage: 'Circuito modificato con successo!',
    },
    {
      label: 'Elimina circuito',
      realValue: 'delete',
      toastMessage: 'Circuito eliminato con successo!',
    },
  ];

  onSubmit(event: { data: any; mode: string; selectedID: string }) {
    this.isLoading = true;

    const MODE = event.mode;
    const DATA = event.data;
    const ID = event.selectedID;

    if (MODE === 'insert') {
      this.circuitiSrv.create(DATA).subscribe({
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
      this.circuitiSrv.edit(ID, DATA).subscribe({
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
      this.circuitiSrv.delete(ID).subscribe({
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
